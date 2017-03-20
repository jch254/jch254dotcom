import React from 'react';
import { Box } from 'reflexbox';
import moment from 'moment';
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass';

const Footer = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="black">
      <Space auto />
      <NavItem color="midgray" href="https://603.nu" style={{ fontWeight: 'normal', fontSize: '12px' }}>
        {`© 603.nu ${moment().year()}`}
      </NavItem>
    </Toolbar>
  </Box>
);

export default Footer;
