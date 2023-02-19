import {
  Box,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import FooterCTA from './FooterComponents/FooterCTA';
import FooterInfoBar from './FooterComponents/FooterInfoBar';
import Sponsors from './FooterComponents/Sponsors';
import WrapContent from './WrapContent';
import { BsArrowUpCircle } from 'react-icons/bs';

function Footer() {
  return (
    <Box bg='#000A1A' as='footer' id='footer' pt='40px' color='white'>
      <WrapContent>
        <Stack spacing='20' pb='10'>
          <Sponsors />
          <FooterCTA />
          <FooterInfoBar />
        </Stack>
      </WrapContent>
      <Box py='8' borderTop='1px solid' borderTopColor={'gray.600'}>
        <WrapContent>
          <Stack
            justifyContent={'space-between'}
            alignItems={['left', 'left', 'center']}
            flexDirection={['column', 'column', 'row']}
          >
            <HStack gap='3' py='2'>
              <Link fontWeight='bold' fontSize={'sm'} href='#'>
                PRIVACY
              </Link>
              <Link fontWeight='bold' fontSize={'sm'} href='#'>
                TERMS
              </Link>
            </HStack>
            <Text fontSize={'sm'} as='b'>
              ©2023 EVOLVED HUMAN CARE. ALL RIGHTS RESERVED.
            </Text>
            <HStack py='2'>
              <HStack>
                <Image w='50px' src='/images/logo-ball.png' alt='logo' />
                <Image w='90px' src='/images/logo.png' alt='logo' />
              </HStack>
              <Link href='#header'>
                <IconButton
                  fontSize='20px'
                  aria-label='go to top'
                  icon={<BsArrowUpCircle />}
                  variant='flushed'
                />
              </Link>
            </HStack>
          </Stack>
        </WrapContent>
      </Box>
    </Box>
  );
}

export default Footer;
