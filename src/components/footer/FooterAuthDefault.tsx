'use client';
/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  let textColor = useColorModeValue('gray.500', 'white');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '30px', md: '0px' }}
      pb="30px"
    >
      <List display="flex">
        <ListItem
          me={{
            base: '10px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            fontSize={{ base: 'xs', md: 'sm' }}
            color={textColor}
            isExternal
            href="https://soosbuilder.notion.site/Terms-Conditions-383d04a2556c47098080d302e24025a5?pvs=4"
          >
            Terms & Conditions
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '10px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            fontSize={{ base: 'xs', md: 'sm' }}
            color={textColor}
            isExternal
            href="https://soosbuilder.notion.site/Privacy-Policy-2a5f2f12b4cf466d9c43e7457737c403?pvs=4"
          >
            Privacy Policy
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '10px',
            md: '44px',
          }}
        >
          <Link
            fontWeight="500"
            fontSize={{ base: 'xs', md: 'sm' }}
            color={textColor}
            isExternal
            href="https://soosbuilder.notion.site/End-User-License-Agreement-2da93d87c8654602870140cacdf6cd15?pvs=4"
          >
            License
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            fontSize={{ base: 'xs', md: 'sm' }}
            color={textColor}
            isExternal
            href="https://soosbuilder.notion.site/Refund-Policy-347038c148834569a6f94705ccfd5ccc?pvs=4"
          >
            Refund Policy
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
