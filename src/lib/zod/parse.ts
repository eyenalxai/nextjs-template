import { type Result, err, ok } from "neverthrow"
import type { ZodType, ZodTypeDef } from "zod"

export const parseZodSchema = <T>(
	schema: ZodType<T, ZodTypeDef, unknown>,
	data: unknown
): Result<T, string> => {
	const result = schema.safeParse(data)

	if (result.success) return ok(result.data)

	return err(
		result.error.errors
			.map(({ message, path }) => {
				if (path.length === 0) return message
				return `${path.join(".")}: ${message}`
			})
			.join(", ")
	)
}
