import React from 'react';
import { Flex } from 'reflexbox';

import Head from './Head';
import Main from './Main';
import Footer from './Footer';

const App = () => (
  <html lang="en">
    <Head title="Jordan Hornblow | Developer" />
    <body>
      <Flex column style={{ height: '100%' }}>
        <Main />
        <Footer />
      </Flex>
    </body>
  </html>
);

export default App;
