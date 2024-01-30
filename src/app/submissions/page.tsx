import { getGrantSubmissions } from '@/app/submissions/actions'
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
import numeral from 'numeral'
import { BiDownload } from 'react-icons/bi'

export default async function Page() {
  const submissions = await getGrantSubmissions()
  return (
    <Container maxW="container.xl" py={4}>
      <Flex justify="space-between">
        <Heading as="h2" mb={4}>
          Submissions
        </Heading>
        <Button
          as="a"
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/nonprofits/submissions/export`}
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
              <Th width="18em">Grant Name</Th>
              <Th isNumeric width="15em">
                Requested Amount
              </Th>
              <Th isNumeric width="15em">
                Awarded Amount
              </Th>
              <Th>Grant Type</Th>
              <Th>Tags</Th>
              <Th>Duration start</Th>
              <Th>Duration end</Th>
            </Tr>
          </Thead>
          <Tbody>
            {submissions.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td whiteSpace="normal">{item.grantName}</Td>
                <Td isNumeric>
                  {numeral(item.requestedAmount).format('$0,0')}
                </Td>
                <Td isNumeric>{numeral(item.awardedAmount).format('$0,0')}</Td>
                <Td whiteSpace="nowrap">{item.grantType}</Td>
                <Td whiteSpace="normal">{item.tags}</Td>
                <Td whiteSpace="normal">{item.duration.grantStart}</Td>
                <Td whiteSpace="normal">{item.duration.grantEnd}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  )
}
