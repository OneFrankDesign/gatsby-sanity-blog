import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex select-none justify-center rounded-md bg-primary p-12">
        <StaticImage src="../images/logo-white.svg" alt="hero" />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
