import seo from '../../../../seo';
import { Box, Button, Heading, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function FooterCTA() {
  return (
    <Box rounded='xl' bg='#091D3E' p={['8', '10']}>
      <HStack flexWrap={'wrap'} justifyContent={'space-between'} gap='5'>
        <Box>
          <Heading as='h2' fontSize={['2xl', '3xl']}>
            Are you looking to build, or partner with us?
          </Heading>
          <Text py={[0, 5]}>We are happy to partner with you.</Text>
        </Box>
        <Button
          px='30px'
          colorScheme={'teal'}
          as={Link}
          href={`mailto:${seo.email}`}
          style={{ marginLeft: 0 }}
        >
          Reach out
        </Button>
      </HStack>
    </Box>
  );
}
