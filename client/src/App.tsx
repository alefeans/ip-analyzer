import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Text, Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import IPCheckScoreInput from './components/IPCheckScoreInput'
import ParticlesBackground from './components/ParticlesBackground'

export default function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <ParticlesBackground colorMode={colorMode} />
      <VStack p={4}>
        <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound={true}
          aria-label='Change color mode'
          size='lg'
          alignSelf='flex-end'
          onClick={toggleColorMode}
          colorScheme='teal'
        />
        <Heading
          mb='8'
          size='4xl'
          fontWeight='extrabold'
          bgGradient='linear(to-r, teal.700, teal.500, teal.400)'
          bgClip='text'
        >
          IP Analyzer</Heading>
        <Text fontSize='lg'>Check the risk score of an IP Address</Text>
        <IPCheckScoreInput />
      </VStack>
    </>
  )
}
