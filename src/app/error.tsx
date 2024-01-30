'use client'

import { Button, Container, Heading } from '@chakra-ui/react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Container py={8} textAlign="center">
      <Heading as="h2" mb={4}>
        Something went wrong!
      </Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  )
}
