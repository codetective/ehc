import {
  Box,
  Circle,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import WrapContent from './Layout/WrapContent';

function Benefits() {
  const benefits_data = [
    {
      title: 'Improved Data Security',
      content:
        ' By storing data across its peer-to-peer network, the EHC platform built on the blockchain eliminates the risks that come with data being stored centrally. This distributed ledger technology ensures that the network lacks a single point of failure and records are less likely to be corrupted than with traditional methods.',
      image: '/images/benefits/1.png',
    },
    {
      title: 'Enhanced Transparency',
      content:
        'All transactions and stored data on the blockchain and decentralized networks is  easily verifiable. This ensures that information shared among participating parties is transparent and can’t be manipulated or tampered with in any way, therefore protecting from fraud or malicious behavior.',
      image: '/images/benefits/2.png',
    },
    {
      title: 'Increased Efficiency & Automation',
      content:
        'Decentralized applications running on Blockchain technology can automate healthcare processes such as setting up appointments, insurance claims processing, structuring medical data, and more, which will help save time and money for organizations within the industry.',
      image: '/images/benefits/3.png',
    },
    {
      title: 'Improved Access to Patient Data',
      content:
        ' Through secure data access management enabled by blockchain technology, healthcare providers and patients alike can access patient health records quickly, further streamlining care delivery processes while eliminating duplicity of efforts.',
      image: '/images/benefits/4.png',
    },
    {
      title: 'More Accurate Records Keeping',
      content:
        'Blockchain records directly into an immutable ledger, thereby reducing manual interventions or human errors when it comes to keeping track of patient health records',
      image: '/images/benefits/5.png',
    },
  ];
  return (
    <Box id='benefits' minH='50vh' py='50px' color='white'>
      <WrapContent>
        <HStack pb='10'>
          <Circle bg='green.500' w='10px' h='10px' />
          <Text as='h2' fontSize={'sm'}>
            BENEFITS OF OUR PLATFORM
          </Text>
        </HStack>
        <Stack gap='10'>
          {benefits_data.map((b, id) => {
            return (
              <BenefitCard
                key={id + 'b'}
                image={b.image}
                title={b.title}
                content={b.content}
                index={id + 1}
              />
            );
          })}
        </Stack>
      </WrapContent>
    </Box>
  );
}

export default Benefits;

function BenefitCard({ title, content, image, index, right = true }) {
  return (
    <Flex
      pos='relative'
      flexDir={['column-reverse', 'row']}
      alignItems={['left', 'center']}
      justifyContent={'space-between'}
      gap={[4, 4, 10]}
      py='5'
    >
      <Stack gap={1}>
        <Text as='h3' fontSize={'xl'}>
          {title}
        </Text>
        <Text
          color='gray.300'
          w={['full', 'full', '70%']}
          fontSize={['sm', 'md']}
        >
          {content}
        </Text>
      </Stack>
      <Image src={image} alt='' w={['100px', '150px']} />
      <Text
        pos='absolute'
        fontSize='120px'
        color={'gray.50'}
        opacity='0.2'
        top={['60%', '30%']}
        left={index % 2 === 0 ? ['50%', '30%'] : ['0%', '0%']}
      >
        {index}
      </Text>
    </Flex>
  );
}
