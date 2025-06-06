import { env } from "@/lib/env.mjs"
import { passkeyClient, twoFactorClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
	baseURL: env.NEXT_PUBLIC_APP_URL,
	plugins: [twoFactorClient(), passkeyClient()]
})
