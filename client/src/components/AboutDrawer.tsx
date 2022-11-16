import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

type AboutDrawerProps = {
  isOpen: boolean,
  onClose: () => void
}

export default function AboutDrawer({ isOpen, onClose }: AboutDrawerProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>About</DrawerHeader>
        <DrawerBody>
          IP Analyzer was created to simplify the access of information about public IP addresses.
          It uses some famous IP scanners like <a href='https://www.abuseipdb.com/'><u>AbuseIPDB</u></a>,
          to unify all the information available about IP addresses
          into one simplified <a href='https://ip-analyzer-server.vercel.app/graphql'><u>GraphQL schema</u></a>.
          <br/>
          <br/>
          
          Check the source code <a href='https://github.com/alefeans/ip-analyzer'><u>here</u></a>.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
