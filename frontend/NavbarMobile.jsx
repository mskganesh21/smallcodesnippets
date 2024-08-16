import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Flex,
  Input,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Box,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa'

const NavbarMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure()

  return (
    <Flex
      as="nav"
      direction="row"
      justify="space-between"
      align="center"
      p="20px"
    >
      <Button colorScheme="blue" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Heading as="h1">SHOP.CO</Heading>
      <Flex gap="20px" direction="row">
        <Box position="relative">
          <Popover
            isOpen={isSearchOpen}
            onClose={onSearchToggle}
            placement="bottom-end"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Box onClick={onSearchToggle} cursor="pointer">
                <FaSearch size={20} />
              </Box>
            </PopoverTrigger>
            <PopoverContent width="100%">
              <PopoverArrow />
              <Input type="text" placeholder="Search For Products" />
            </PopoverContent>
          </Popover>
        </Box>
        <MdOutlineShoppingCart size={20} />
        <RxAvatar size={20} />
      </Flex>
    </Flex>
  )
}

export default NavbarMobile
