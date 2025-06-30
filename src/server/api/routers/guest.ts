import z from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const guestRouter = createTRPCRouter({
    getGuest: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
        const guest = await ctx.db.guest.findUnique({
            where: { id: input },
        });

        if (!guest) {
            throw new Error("Guest not found");
        }

        return  guest ?? null;
    }),

    getAll: protectedProcedure
    .query(async ({ ctx }) => {
        const guests = await ctx.db.guest.findMany({
            orderBy: { name: "asc" },
        });
        return guests;
    }),

    confirmAttendance: publicProcedure
    .input(z.object({
        id: z.string(),
        confirmedPasses: z.number()}
    ))
    .mutation(async ({ ctx, input }) => {
        const guest = await ctx.db.guest.update({
            where: { id: input.id },
            data: { 
                responded: true,
                confirmedPasses: input.confirmedPasses,
            },
        });

        if (!guest) {
            throw new Error("Guest not found");
        }

        return guest;
    }),
    
    confirmVegetarian: publicProcedure
    .input(z.object({
        id: z.string(),
        vegetarian: z.number().min(0).max(10).default(0),
    }))
    .mutation(async ({ ctx, input }) => {
        const guest = await ctx.db.guest.update({
            where: { id: input.id },
            data: {
                vegetarian: input.vegetarian,
            },
        });
        
        return guest;
    }),

    getGuestById: protectedProcedure
    .input(z.string().nullable())
    .query(async ({ ctx, input }) => {
        if (!input) {
            return null;
        }
        const guest = await ctx.db.guest.findUnique({
            where: { id: input },
        });

        if (!guest) {
            throw new Error("Guest not found");
        }

        return guest;
    }),

    createGuest: protectedProcedure
    .input(z.object({
        name: z.string(),
        passes: z.number().min(1).max(10).default(1),
    }))
    .mutation(async ({ ctx, input }) => {
        const newGuest = await ctx.db.guest.create({
            data: {
                name: input.name,
                passes: input.passes,
            },
        });

        return newGuest;
    }),

    updateGuest: protectedProcedure
    .input(z.object({
        id: z.string(),
        name: z.string(),
        passes: z.number().min(1).max(10).default(1),
    }))
    .mutation(async ({ ctx, input }) => {   
        const updatedGuest = await ctx.db.guest.update({
            where: { id: input.id },
            data: {
                name: input.name,
                passes: input.passes,
            },
        });

        if (!updatedGuest) {
            throw new Error("Guest not found");
        }

        return updatedGuest;
    }),

    deleteGuest: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
        const deletedGuest = await ctx.db.guest.delete({
            where: { id: input },
        });

        if (!deletedGuest) {
            throw new Error("Guest not found");
        }

        return deletedGuest;
    })
})