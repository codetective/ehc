import { Center, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function OurTechnology() {
  return (
    <Stack textAlign='center' gap='5' id='tech'>
      <Text as='h2' fontSize='xl' color='#D4Af37'>
        OUR TECHNOLOGY
      </Text>
      <Stack gap='5'>
        <Text>
          EHC is built on a more efficient architecture (blockchain and web 3,0)
          allowing varying access levels, where users and providers control who
          can access their data and information. Offering accessible healthcare,
          no matter your location.
        </Text>
        <Text>
          EHC is a healthcare platform utilizing blockchain technology to
          revolutionize the healthcare sector by improving patient data security
          and accessibility, reducing administrative costs, and streamlining
          clinical trials. It provides world-class healthcare accessible from
          any device with active internet.
        </Text>
      </Stack>
    </Stack>
  );
}

export default OurTechnology;
