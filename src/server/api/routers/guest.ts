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
            orderBy: { name: "desc" },
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
})