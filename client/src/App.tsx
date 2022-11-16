import React from 'react'
import { Text, Heading, VStack, useColorMode } from '@chakra-ui/react'
import MainMenu from './components/MainMenu'
import IPCheckScoreInput from './components/IPCheckScoreInput'
import ParticlesBackground from './components/ParticlesBackground'

export default function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <ParticlesBackground colorMode={colorMode} />
      <VStack p={4}>
        <MainMenu
          colorMode={colorMode}
          toggleColorMode={toggleColorMode} />
        <Heading
          mb='8'
          size='4xl'
          fontWeight='extrabold'
          bgGradient='linear(to-r, teal.700, teal.500, teal.400)'
          bgClip='text'>
          IP Analyzer</Heading>
        <Text fontSize='lg'>Check the risk score of an IP Address</Text>
        <IPCheckScoreInput />
      </VStack>
    </>
  )
}
