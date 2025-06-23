import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getUser: publicProcedure
        .query(async ({ ctx }) => {
            const { session } = ctx;
            if (!session || !session.user) {
                throw new Error("User not authenticated");
            }
            const userId = session.user.id;
            const user = await ctx.db.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        })
    
})