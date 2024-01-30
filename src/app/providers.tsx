'use client'

import theme from '@/app/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ColorModeScript
        initialColorMode={theme.config?.initialColorMode}
        type="cookie"
      />
      <ChakraProvider colorModeManager={cookieStorageManager} theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
