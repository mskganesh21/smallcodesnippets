import {
  Box,
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Menu,
  Button,
  MenuButton,
  MenuList,
  Link,
  MenuItem,
} from '@chakra-ui/react'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Flex
      as="nav"
      direction="row"
      justify="space-between"
      align="center"
      p="20px"
      gap="20px"
    >
      <Box>
        <Heading as="h1">SHOP.CO</Heading>
      </Box>
      <Flex flexShrink="0" gap="20px" align="center">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Electronics</MenuItem>
            <MenuItem>Fashion</MenuItem>
            <MenuItem>Beauty</MenuItem>
          </MenuList>
        </Menu>
        <Link>OnSale</Link>
        <Link>New Arrivals</Link>
        <Link>Brands</Link>
      </Flex>
      <Box p="40px" flexGrow="1" flexShrink="0">
        <InputGroup>
          <InputLeftElement>
            <CiSearch />
          </InputLeftElement>
          <Input
            borderRadius="20px"
            type="text"
            variant="filled"
            placeholder="Search For Products"
          />
        </InputGroup>
      </Box>
      <Flex gap="20px" align="center" direction="row">
        <MdOutlineShoppingCart size={20} />
        <RxAvatar size={20} />
      </Flex>
    </Flex>
  )
}

export default Navbar
