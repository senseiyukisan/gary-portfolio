import React from 'react';
import { Heading, Box } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';


const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404">
      <Box width={[320, 400, 600]} m="auto">
        <Heading
          color="primaryDark"
          fontSize={['9rem', '13rem', '16rem']}
          as="h1"
        >
          404
        </Heading>
        <Heading color="primary" fontSize={['4rem', '5rem', '6rem']} as="h2">
          There isn&apos;t anything here
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
