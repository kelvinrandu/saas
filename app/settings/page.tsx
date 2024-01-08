'use client';

// Chakra imports
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

import Info from '@/components/settings/Info';
import Password from '@/components/settings/Password';
import Profile from '@/components/settings/Profile';
import Socials from '@/components/settings/Socials';
import Delete from '@/components/settings/Delete';
import avatar1 from '../../public/img/avatars/avatar4.png';

export default function Settings() {
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing="20px" mb="20px">
        {/* Column Left */}
        <Flex direction="column">
          <Profile
            name="Adela Parkson"
            avatar={avatar1}
            banner={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
          />
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex direction="column" gap="20px">
          <Socials />
          <Password />
        </Flex>
      </SimpleGrid>
      <Delete />
    </Box>
  );
}
