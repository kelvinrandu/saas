'use client';
// Chakra imports
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import Card from '@/components/card/Card';
import InvoiceTable from '@/components/invoice/InvoiceTable';

import tableDataInvoice from '@/variables/account/invoice/tableDataInvoice';

export default function Content(props: { [x: string]: any }) {
  // Chakra Color Mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textSecondaryColor = useColorModeValue('gray.500', 'white');
  const bgCard = useColorModeValue('white', 'navy.700');
  return (
    <Flex direction="column" p={{ base: '10px', md: '60px' }}>
      <Card
        bg={bgCard}
        backgroundRepeat="no-repeat"
        p="30px"
        mb="30px"
        mt="-100px"
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Flex direction="column" me="auto">
            <Text color={textColor} fontSize="xl" fontWeight="700">
              Adela Parkson
            </Text>
            <Text
              w="max-content"
              mb="10px"
              fontSize="md"
              color={textSecondaryColor}
              fontWeight="400"
              lineHeight="24px"
            >
              37 Avenue, Boggstown,
              <br /> Indiana, United States 84219
            </Text>
          </Flex>
          <Text my="auto" color={textColor} fontSize="36px" fontWeight="700">
            $39,00
          </Text>
        </Flex>
      </Card>
      <InvoiceTable tableData={tableDataInvoice} />
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="right"
        mt="50px"
      >
        <Button
          variant="red"
          py="20px"
          px="16px"
          fontSize="sm"
          borderRadius="45px"
          w={{ base: '100%', md: '210px' }}
          h="54px"
        >
          Cancel Subscription
        </Button>
        <Button
          variant="primary"
          py="20px"
          px="16px"
          fontSize="sm"
          borderRadius="45px"
          mt={{ base: '20px', md: '0px' }}
          w={{ base: '100%', md: '210px' }}
          h="54px"
        >
          Change Plan
        </Button>
      </Flex>
    </Flex>
  );
}
