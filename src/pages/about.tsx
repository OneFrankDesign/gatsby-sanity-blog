import * as React from 'react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/layout/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const AboutPage: React.FC<PageProps<Queries.AboutPageQuery>> = ({ data }) => {
  const profileImage = data.profileImage
    ? getImage(data.profileImage.childImageSharp)
    : null;
  return (
    <Layout>
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="mb-4 p-4 text-2xl text-header sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          About Frank Krogh
        </h1>
        <section className="p-2 text-sm sm:text-base md:text-lg">
          <h2 className="mb-4 font-bold text-header">My journey into tech</h2>
          <p className="mb-4">
            My journey into web development started in the midst of the COVID-19
            pandemic, a transition driven by the desire to secure a stable
            future for my family in a changing world. With a foundation in
            manual labor jobs, I took the leap into technology, starting with
            Colt Steele's courses on Udemy, freecodecamp's curriculum, and the
            odin project's curriculum. In just two years, I've made strides in
            the tech world, marking my anniversary in the industry on January
            21, 2023.
          </p>
          <div className="my-8 flex flex-col gap-4 sm:items-center sm:justify-center lg:flex-row">
            {profileImage && (
              <div className="relative mx-auto w-3/5 sm:w-1/5 md:w-2/5">
                <GatsbyImage
                  image={profileImage}
                  alt="My Profile Image"
                  className="w-full rounded-full shadow-lg grayscale "
                />
                <div className="absolute inset-0 rounded-full bg-overlay brightness-125"></div>
              </div>
            )}
            <article>
              <h2 className="mb-4 font-bold text-header">
                Where I am at today
              </h2>
              <p className="mb-4">
                Today, I'm a Software Developer at Midwestern Interactive LLC, a
                company that might be small in size but is mighty in impact. We
                seamlessly integrate into other companies' teams, providing
                critical services in project management, design, and software
                engineering. The freedom to learn and expand my skills at
                Midwestern Interactive is a huge plus, as I am always eager to
                delve into new technologies and concepts.
              </p>
              <p>
                Beyond my professional life, I am a family man committed to
                making a difference in a rapidly evolving world. If you're
                looking to collaborate or just chat about tech, feel free to get
                in touch!
              </p>
            </article>
          </div>
          <h2 className="mb-4 font-bold text-header">My tech stack</h2>
          <p className="mb-4">
            My tech stack includes Next.js, Gatsby.js, Sanity, Airtable, Vanilla
            Javascript, React, React Native, Node and Nest.js, EJS, Handlebars,
            Postgres, MySQL, and MongoDB. But I don't plan on stopping there.
            Currently, I am learning Kotlin and Java to dive into Android
            development - a testament to my belief in the widespread utility of
            mobile technology. Eventually, I aim to delve into AI and machine
            learning model development for mobile applications.
          </p>
        </section>
        <div className="my-10 flex justify-center">
          <Link
            to="/contact"
            className="rounded bg-secondary px-8 py-4 text-white transition-colors hover:bg-accent"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage {
    profileImage: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>About Page</title>;
