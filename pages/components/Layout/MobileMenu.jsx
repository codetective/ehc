import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  DrawerHeader,
  Link,
  Stack,
  Button,
  Input,
  DrawerFooter,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import React from 'react';

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const links = [
    {
      name: 'Home',
      path: '#header',
    },
    {
      name: 'Benefits',
      path: '#benefits',
    },
    {
      name: 'Our Team',
      path: '#team',
    },
    {
      name: 'Our Technologies',
      path: '#tech',
    },
    {
      name: 'Contact',
      path: '#footer',
    },
  ];

  return (
    <>
      <IconButton
        ref={btnRef}
        variant={'flushed'}
        onClick={onOpen}
        color='white'
        icon={<BiMenu />}
        fontSize='30px'
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack gap='2'>
              {links.map((link) => (
                <Link
                  onClick={() =>
                    setTimeout(() => {
                      onClose();
                    }, 600)
                  }
                  _hover={{ bg: 'gray.100' }}
                  py='2'
                  px='6'
                  href={link.path}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
