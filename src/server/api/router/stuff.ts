import {
	createTRPCRouter,
	protectedProcedure,
	publicProcedure
} from "@/server/api/trpc"
import { z } from "zod"

export const stuffRouter = createTRPCRouter({
	getPublicStuff: publicProcedure.query(async () => {
		return {
			message: "Hello, world!"
		}
	}),
	getProtectedStuff: protectedProcedure
		.input(
			z.object({
				uuid: z.string()
			})
		)
		.query(async ({ ctx, input }) => {
			return {
				userId: ctx.session.user.id,
				uuid: input.uuid
			}
		})
})
