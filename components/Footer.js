import React from 'react'
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass'
import { Box } from 'reflexbox'

const Footer = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="black">
      <Space auto />
      <NavItem color="midgray" href="https://603.nu" children="© 603.nu 2016" />
    </Toolbar>
  </Box>
);

export default Footer;
