import React from 'react';
import {
  Heading,
  HeadingLink,
} from 'rebass';
import { Flex } from 'reflexbox'

const Main = () => (
  <Flex column align="center" justify="center" style={{ flex: '1 0 auto' }} >
    <Heading size={1} style={{ textAlign: 'center' }} big children="Jordan Hornblow" />
    <Flex>
      <HeadingLink size={2} style={{ textAlign: 'center' }} href="./JordanHornblow-Resume.pdf">
        Resume
      </HeadingLink>
      <Heading size={2} px={1} style={{ textAlign: 'center' }} children="|" />
      <HeadingLink size={2} style={{ textAlign: 'center' }} href="mailto:jordan@jch254.com">
        Contact
      </HeadingLink>
    </Flex>
  </Flex>
);

export default Main;
