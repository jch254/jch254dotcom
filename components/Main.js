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
    <Flex>
      <HeadingLink size={2} href="https://603.nz">
        Projects
      </HeadingLink>
      <Heading size={2} px={1}>
        |
      </Heading>
      <HeadingLink size={2} href="./JordanHornblow-Resume.pdf">
        Resume
      </HeadingLink>
      <Heading size={2} px={1}>
        |
      </Heading>
      <HeadingLink size={2} href="mailto:jordan@jch254.com">
        Contact/Hire
      </HeadingLink>
    </Flex>
  </Flex>
);

export default Main;
