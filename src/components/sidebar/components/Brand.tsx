'use client';
// Chakra imports
import { Flex, useColorModeValue,Text } from '@chakra-ui/react';

import Navbar from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    
    // @ts-ignore
    <Flex alignItems="center" flexDirection="column">
<Text    fontSize='larger'
 
        fontWeight="800">SooS AI</Text>
   
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
