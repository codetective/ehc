import seo from '../../../../seo';
import {
  Button,
  FormControl,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Box,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';

export default function FooterInfoBar() {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='10'>
      <Button variant='outline' colorScheme='teal'>
        Get Started with EHC
      </Button>

      <Stack spacing='3'>
        <Text pl='4' as='h4' borderLeft='1px solid #2493a2'>
          CONTACT US
        </Text>
        <Text as='small'>
          Email us:{' '}
          <Text as={Link} href={`mailto:${seo.email}`}>
            <b>{seo.email}</b>
          </Text>
        </Text>
      </Stack>
      <Box display={['none', 'block']} />
      <Stack spacing='3'>
        <Text pl='4' as='h4' borderLeft='1px solid #2493a2'>
          SIGN UP FOR EMAIL UPDATES
        </Text>
        <Text as='small'>
          <FormControl isRequired>
            <InputGroup>
              <Input
                border='none'
                roundedLeft='xl'
                type='email'
                placeholder='your email address'
                bg='gray.800'
              />
              <InputRightAddon
                paddingStart={0}
                paddingEnd={0}
                bg='transparent'
                border='none'
              >
                <Button colorScheme={'teal'} roundedRight='xl' bg='#2493a2'>
                  Submit
                </Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </Text>
      </Stack>
    </SimpleGrid>
  );
}
