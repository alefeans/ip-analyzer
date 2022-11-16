import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaSun, FaMoon, FaQuestion, FaGithub } from 'react-icons/fa'
import { IconButton, ColorMode, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import AboutDrawer from './AboutDrawer'

type MainMenuProps = {
  colorMode: ColorMode,
  toggleColorMode: () => void
}

export default function MainMenu({ colorMode, toggleColorMode }: MainMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton
          alignSelf='flex-end'
          as={IconButton}
          aria-label='Options'
          icon={<FiMenu />}
          variant='outline'
          size='lg' />
        <MenuList>
          <MenuItem
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            aria-label='Change color mode'
            onClick={toggleColorMode}>
            Change Theme
          </MenuItem>
          <MenuItem
            icon={<FaQuestion />}
            aria-label='About this page'
            onClick={onOpen}>
            About
          </MenuItem>
          <MenuItem
            icon={<FaGithub />}
            aria-label='Github source code'
            onClick={() => window.open('https://github.com/alefeans/ip-analyzer')}>
            Source
          </MenuItem>
        </MenuList>
      </Menu>
      <AboutDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
