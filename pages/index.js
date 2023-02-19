import { Box, Stack } from '@chakra-ui/react';
import Benefits from './components/Benefits';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import WrapContent from './components/Layout/WrapContent';
import MeetOurTeam from './components/MeetOurTeam';
import OurTechnology from './components/OurTechnology';

export default function Home() {
  return (
    <>
      <Box as='main' bg='gray.100' pb='40px'>
        <Header />
        <Box pb='10'>
          <Benefits />
        </Box>
        <WrapContent>
          <Stack gap='10'>
            <MeetOurTeam />
            <OurTechnology />
          </Stack>
        </WrapContent>
      </Box>
      <Footer />
    </>
  );
}
