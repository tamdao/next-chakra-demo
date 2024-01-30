'use client'

import ThemeToggle from '@/app/components/theme-toggle'
import { Button, Container, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      top={0}
      position="sticky"
      zIndex="sticky"
      backdropFilter="saturate(180%) blur(20px) contrast(90%)"
    >
      <Container maxW="container.xl" py={1}>
        <Flex>
          <Flex flex={1} gap={4}>
            <Button variant="link" as={Link} href="/">
              Nonprofits
            </Button>
            <Button variant="link" as={Link} href="/submissions">
              Submissions
            </Button>
          </Flex>
          <ThemeToggle />
        </Flex>
      </Container>
    </Flex>
  )
}
