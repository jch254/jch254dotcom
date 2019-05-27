import React from 'react';
import { Flex } from 'reflexbox';
import {
  Heading,
  HeadingLink,
} from 'rebass';

const Main = () => (
  <Flex
    column
    align="center"
    justify="center"
    style={{ flex: '1 0 auto', textAlign: 'center' }}
    className="text-focus-in"
  >
    <Heading size={1} big>
      Jordan Hornblow
    </Heading>
    <Flex style={{ width: '100%' }}>
      <HeadingLink size={2} href="https://603.nz" style={{ flex: 1, textAlign: 'right' }}>
        Projects
      </HeadingLink>
      <Heading size={2} px={1}>
        |
      </Heading>
      <HeadingLink size={2} href="https://github.com/jch254" target="_blank" style={{ flex: 1, textAlign: 'left' }}>
        GitHub
      </HeadingLink>
    </Flex>
    <Flex style={{ width: '100%' }}>
      <HeadingLink size={2} href="./JordanHornblow-Resume.pdf" style={{ flex: 1, textAlign: 'right' }}>
        Resume
      </HeadingLink>
      <Heading size={2} px={1}>
        |
      </Heading>
      <HeadingLink size={2} href="mailto:jordan@jch254.com" style={{ flex: 1, textAlign: 'left' }}>
        Contact
      </HeadingLink>
    </Flex>
  </Flex>
);

export default Main;
