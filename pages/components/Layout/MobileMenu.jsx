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
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        variant={'flushed'}
        onClick={onOpen}
        color='white'
        icon={<BiMenu />}
        fontSize='30px'
      />
      <Drawer isOpen={isOpen} placement='right' size={'xs'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex='10' />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody px='0'>
            <Stack gap='2'>
              {links.map((link) => (
                <Link
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
