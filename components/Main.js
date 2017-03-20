import React from 'react';
import { Flex } from 'reflexbox';
import {
  Heading,
  HeadingLink,
} from 'rebass';

const Main = () => (
  <Flex column align="center" justify="center" style={{ flex: '1 0 auto' }} >
    <Heading size={1} style={{ textAlign: 'center' }} big>
      Jordan Hornblow
    </Heading>
    <Flex>
      <HeadingLink size={2} style={{ textAlign: 'center' }} href="./JordanHornblow-Resume.pdf">
        Resume
      </HeadingLink>
      <Heading size={2} px={1} style={{ textAlign: 'center' }}>
        |
      </Heading>
      <HeadingLink size={2} style={{ textAlign: 'center' }} href="mailto:jordan@jch254.com">
        Contact/Hire
      </HeadingLink>
    </Flex>
  </Flex>
);

export default Main;
