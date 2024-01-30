import { getNonprofits } from '@/app/actions'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { BiDownload } from 'react-icons/bi'

export default async function Page() {
  const nonprofits = await getNonprofits()

  return (
    <Container maxW="container.xl" py={4}>
      <Flex justify="space-between">
        <Heading as="h2" mb={4}>
          Nonprofits
        </Heading>
        <Button
          as="a"
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/nonprofits/export`}
          target="_blank"
          rightIcon={<BiDownload />}
        >
          Export CSV
        </Button>
      </Flex>
      <Box overflowY="auto" maxHeight="calc(100vh - 140px)">
        <Table layout="fixed" size="sm">
          <Thead
            position="sticky"
            top={0}
            backdropFilter="saturate(180%) blur(20px) contrast(90%)"
          >
            <Tr>
              <Th width="5em">ID</Th>
              <Th width="18em">Legal Name</Th>
              <Th width="10em">EIN</Th>
              <Th width="48em">Mission</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {nonprofits.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td whiteSpace="normal">{item.legalName}</Td>
                <Td>{item.ein}</Td>
                <Td whiteSpace="normal">{item.mission}</Td>
                <Td whiteSpace="normal">
                  {[
                    item.address.street,
                    item.address.city,
                    item.address.state,
                    item.address.zip,
                  ]
                    .filter(Boolean)
                    .join(', ')}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  )
}
