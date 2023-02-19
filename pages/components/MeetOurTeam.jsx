import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

function MeetOurTeam() {
  const team = [
    {
      name: 'DR. JORGE',
      role: 'FOUNDER & CEO (MEXICO)',
      desc: 'medical doctor, masters H.A',
      bio: 'With over 30 years of experience in the art world, Aaron spent 15 years immersed in a career of strategic planning and helping to build a multi-million dollar...',
      image: '/images/team/jorge.png',
    },
    {
      name: 'AARON K. METZ',
      role: 'FOUNDER & CCO (CANADA)',
      desc: 'holistic healer, nft artists & graphic designer',
      bio: 'With over 30 years of experience in the art world, Aaron spent 15 years immersed in a career of strategic planning and helping to build a multi-million dollar...',
      image: '/images/team/aaron.png',
    },
    {
      name: 'EDIDIONG UMANA',
      role: 'FOUNDER & CTO (NIGERIA)',
      desc: 'Senior blockchain developer & African ambassador',
      bio: 'With over 30 years of experience in the art world, Aaron spent 15 years immersed in a career of strategic planning and helping to build a multi-million dollar...',
      image: '/images/team/edidiong.png',
    },
    {
      name: 'SAULIUS MACIULIS',
      role: 'FOUNDER & CBTO (LITHUANIA)',
      desc: 'ama host & senior blockchain advisor',
      bio: 'With over 30 years of experience in the art world, Aaron spent 15 years immersed in a career of strategic planning and helping to build a multi-million dollar...',
      image: '/images/team/salinus.png',
    },
    {
      name: 'DIEGO OROZCO',
      role: 'FOUNDER & CMO (USA/Mexico)',
      desc: 'senior blockchain project manager',
      bio: 'With over 30 years of experience in the art world, Aaron spent 15 years immersed in a career of strategic planning and helping to build a multi-million dollar...',
      image: '/images/team/diego.png',
    },
  ];
  return (
    <Box py='40px' id='team'>
      <HStack justifyContent='center' pb='10'>
        <Image src='/images/tagg.png' alt='' />
        <Text as='h2' fontSize='xl'>
          MEET OUR TEAM
        </Text>
      </HStack>

      <SimpleGrid columns={[1, 2, 3]} gap='8'>
        {team.map((team, indx) => {
          return (
            <TeamCard
              bio={team.bio}
              image={team.image}
              name={team.name}
              desc={team.desc}
              role={team.role}
              key={indx}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default MeetOurTeam;

function TeamCard({ image, name, desc, bio, role }) {
  const [show, setShow] = useState(false);
  return (
    <Stack
      gap={4}
      alignItems='center'
      p='4'
      bg='white'
      shadow='xl'
      rounded='lg'
      pos='relative'
    >
      <Image rounded={'full'} w='95%' src={image} alt={name} maxW='200px' />
      <Box textAlign={'center'}>
        <Text as='h3'>{name}</Text>
        <Text fontSize='xs' textTransform={'capitalize'}>
          {role}
        </Text>
        <Text fontSize='xs' textTransform={'capitalize'}>
          {desc}
        </Text>
        <Box pt='4'>
          <Button onClick={() => setShow(true)} variant={'ghost'} size='xs'>
            BIO
          </Button>
        </Box>
      </Box>
      <AnimatePresence>
        {show && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 58 }}
            exit={{ opacity: 0, y: 0 }}
            fontSize='xs'
            rounded='lg'
            pos='absolute'
            userSelect={'none'}
            top='0'
            left='0'
            h='80%'
            width='100%'
            bg='gray.100'
            shadow='base'
            p='4'
          >
            {bio}
            <Box pt='4' w='fit-content' m='auto'>
              <Button
                onClick={() => setShow(false)}
                size='xs'
                color={'crimson'}
              >
                Close
              </Button>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Stack>
  );
}
