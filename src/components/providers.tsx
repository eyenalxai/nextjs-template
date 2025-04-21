"use client"

import { TRPCReactProvider } from "@/components/providers/trpc-provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<TRPCReactProvider>{children}</TRPCReactProvider>
		</NextThemesProvider>
	)
}
