import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/layout';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>Welcome to my Gatsby site!</p>
      <h2>About</h2>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;
