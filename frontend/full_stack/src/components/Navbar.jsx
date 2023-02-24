import React from 'react'
import { Text,Box,Flex, Spacer } from '@chakra-ui/react'

const Navbar = () => {
  return (
   <Flex p='2'border='1px'>
    <Text>LOGO</Text>
    <Spacer/>
    <Text>Homepage</Text>
    <Spacer/>
    <Text>Homepage</Text>
    <Spacer/>
    <Text>Product</Text>
    <Spacer/>
    <Text>Signup</Text>
    <Spacer/>
    <Text>Login</Text>
   </Flex>
  )
}

export default Navbar