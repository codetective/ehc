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
  Image,
  InputGroup,
  InputRightAddon,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg='whiteAlpha.100'
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      target='_blank'
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'whiteAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterInfoBar() {
  return (
    <SimpleGrid columns={[1, 2, 2]} spacing='10'>
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
        <Stack direction={'row'} spacing={5}>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/EvolvedHC?t=S2xF4GB_LO16x3ovPdqJHw&s=09'}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'YouTube'}
            href={'https://youtube.com/@evolvedhumancare435'}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://instagram.com/evolvedhumancare?igshid=YmMyMTA2M2Y='}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/company/evolved-human-care/'}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={'Facebook'}
            href={
              'https://www.facebook.com/profile.php?id=100086404486247&mibextid=ZbWKwL'
            }
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'Linktree'}
            href={'https://linktr.ee/evolvedhumancare'}
          >
            <Image
              rounded='full'
              w='50px'
              src='/images/linktree.png'
              alt='linktree'
            />
          </SocialButton>
        </Stack>
      </Stack>
      <Box display={['none', 'block', 'none']} />
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
