import * as React from 'react';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="" to="/about">
            About
          </Link>
          <Link className="" to="/portfolio">
            Portfolio
          </Link>
          <Link className="" to="/services">
            Services
          </Link>
          <Link className="" to="/blog">
            Blog
          </Link>
          <Link className="" to="/resume">
            Resume
          </Link>
          <Link className="" to="/contact">
            Contact
          </Link>
          <Link className="" to="/certifications">
            Certifications
          </Link>
        </div>
        <div className="mt-6 text-center">
          &copy; {new Date().getFullYear()} Frank Krogh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
