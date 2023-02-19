import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function Sponsors() {
  return (
    <Box>
      <Box py='4' fontWeight={'bold'}>
        <Text as='h3'>OUR PARTNERS</Text>
      </Box>
      <SimpleGrid gap='8' columns={[2, 4, 4]}>
        <SponsorCard>
          <Image w='100px' src='/images/sponsors/aexc.png' alt='aec sponsor' />
        </SponsorCard>
        <SponsorCard>
          <Image
            w='100px'
            src='/images/sponsors/hadaro.png'
            alt='aec sponsor'
          />
        </SponsorCard>
        <SponsorCard>
          <Image
            w='100px'
            src='/images/sponsors/havenspoint.png'
            alt='aec sponsor'
          />
        </SponsorCard>
        <SponsorCard>
          <Image
            w='100px'
            src='/images/sponsors/riquelme.png'
            alt='aec sponsor'
          />
        </SponsorCard>
      </SimpleGrid>
    </Box>
  );
}

export default Sponsors;

function SponsorCard({ children }) {
  return (
    <Box shadow='lg' bg='#020d20' p='5' rounded='xl'>
      {children}
    </Box>
  );
}
