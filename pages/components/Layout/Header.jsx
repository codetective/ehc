import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Center,
} from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <Box
      id='header'
      bgImg={'images/hero.png'}
      bgBlendMode='overlay'
      bgColor={'rgba(0,0,0,0.5)'}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPos={'center'}
    >
      <Navbar />
      <Box id='hcb'>
        <Container maxW={'3xl'} id='hc'>
          <Stack
            minH='80vh'
            justify={'center'}
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 50 }}
            color='white'
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
              lineHeight={'110%'}
            >
              Welcome to Evolved Human <br />
              <Text as={'span'}>Care</Text>
            </Heading>
            <Center>
              <Text
                color={'gray.400'}
                w={['full', '80%']}
                textAlign='center'
                m='auto'
              >
                Evolved Human Care (EHC) is a web-based virtual platform that
                uses blockchain technology to create a user-focused electronic
                health record with enhanced security and accessibility for
                service providers and end-users.
              </Text>
            </Center>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
            >
              <Button colorScheme={'teal'} bg='#2493a2' rounded={'lg'} px={6}>
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
