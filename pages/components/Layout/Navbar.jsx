import { Box, HStack, Image, Link } from '@chakra-ui/react';
import React from 'react';
import MobileMenu from './MobileMenu';
import WrapContent from './WrapContent';

function Navbar() {
  return (
    <Box py='2'>
      <WrapContent>
        <HStack justifyContent={'space-between'}>
          <HStack>
            <Image w='40px' src='/images/logo-c.png' alt='logo' />
            <Image w='80px' src='/images/logo.png' alt='logo' />
          </HStack>

          <HStack>
            {/* <Link fontWeight='bold' color='white' fontSize={'sm'} href='#'>
              Log in
            </Link> */}
            <MobileMenu />
          </HStack>
        </HStack>
      </WrapContent>
    </Box>
  );
}

export default Navbar;
