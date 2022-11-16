import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link } from '@chakra-ui/react'

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
          It uses some famous IP scanners like <Link isExternal={true} href='https://www.abuseipdb.com/'><u>AbuseIPDB</u></Link>,
          to unify all the information available about IP addresses
          into one simplified <Link isExternal={true} href='https://ip-analyzer-server.vercel.app/graphql'><u>GraphQL schema</u></Link>.
          <br/><br/>
          Check the project on <Link isExternal={true} href='https://github.com/alefeans/ip-analyzer'><u>Github</u></Link> for more information.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
