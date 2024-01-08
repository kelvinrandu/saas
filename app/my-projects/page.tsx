'use client';

// Chakra imports
import Card from '@/components/card/Card';
import ProjectCard from '@/components/card/ProjectCard';
import { SearchBar } from '@/components/search';
import {
  Box,
  Button,
  Flex,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdApps, MdDashboard } from 'react-icons/md';

export default function Settings() {
  const textColor = useColorModeValue('navy.700', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' },
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' },
  );
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <Card w="100%" mb="20px">
        <Flex align="center" direction={{ base: 'column', md: 'row' }}>
          <Text fontSize="lg" fontWeight={'700'}>
            All Projects (6)
          </Text>
          <Button
            variant="primary"
            py="20px"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            ms="auto"
            mt={{ base: '20px', md: '0px' }}
            w={{ base: '100%', md: '210px' }}
            h="54px"
          >
            New Project
          </Button>
        </Flex>
      </Card>
      <Flex w="100%" mb="20px" direction={{ base: 'column', md: 'row' }}>
        <SearchBar />
        <Select
          fontSize="sm"
          id="edit_product"
          variant="main"
          h="44px"
          maxH="44px"
          mt={{ base: '20px', md: '0px' }}
          me={{ base: '10px', md: '20px' }}
        >
          <option value="single">Single Items</option>
          <option value="multiple">Multiple Items</option>
        </Select>
        <Select
          fontSize="sm"
          variant="main"
          h="44px"
          maxH="44px"
          mt={{ base: '20px', md: '0px' }}
          me={{ base: '10px', md: '20px' }}
        >
          <option value="low_to_high">Low to high</option>
          <option value="high_to_low">High to low</option>
        </Select>
        <Button
          me={{ base: '10px', md: '20px' }}
          bg={buttonBg}
          border="1px solid"
          color="gray.500"
          mt={{ base: '20px', md: '0px' }}
          borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
          borderRadius="12px"
          minW="44px"
          h="44px"
          _placeholder={{ color: 'gray.500' }}
          _hover={hoverButton}
          _active={activeButton}
          _focus={activeButton}
        >
          <Icon color={textColor} as={MdDashboard} />
        </Button>
        <Button
          bg={buttonBg}
          border="1px solid"
          color="gray.500"
          mt={{ base: '20px', md: '0px' }}
          borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
          borderRadius="12px"
          minW="44px"
          h="44px"
          _placeholder={{ color: 'gray.500' }}
          _hover={hoverButton}
          _active={activeButton}
          _focus={activeButton}
        >
          <Icon color={textColor} as={MdApps} />
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="20px">
        <ProjectCard title="Untitled Project 6" time="Today at 09:58 AM" />
        <ProjectCard title="Untitled Project 5" time="Yesterday at 08:27 AM" />
        <ProjectCard title="Untitled Project 4" time="06 May at 12:46 PM" />
        <ProjectCard title="Untitled Project 3" time="04 May at 04:26 AM" />
        <ProjectCard title="Untitled Project 2" time="02 May at 10:24 PM" />
        <ProjectCard title="Untitled Project 1" time="28 Apr at 11:23 AM" />
      </SimpleGrid>
    </Box>
  );
}
