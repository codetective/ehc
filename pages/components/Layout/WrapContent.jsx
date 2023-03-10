import { Container } from '@chakra-ui/react';
import React from 'react';

function WrapContent({ children }) {
  return (
    <Container maxW='container.xl' w='full' h='full' px={5} mx='auto'>
      {children}
    </Container>
  );
}

export default WrapContent;
