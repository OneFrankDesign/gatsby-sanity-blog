import { Link } from 'gatsby';
import React from 'react';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { title, navigation } = useSiteMetadata();

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <header className="px-10 py-5 sm:p-5 lg:p-5">
      <div className="flex items-center justify-between">
        {title && (
          <div className="sm:hidden">
            <p>{title}</p>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block p-2 sm:hidden"
          title="Open Menu"
        >
          <VscMenu className="h-6 w-6 " />
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } fixed left-0 top-0 z-10 h-full w-full flex-col items-center justify-center bg-white text-center sm:static sm:flex sm:h-auto sm:flex-wrap sm:items-center sm:justify-center sm:bg-transparent sm:text-left md:flex-row md:justify-around lg:justify-between`}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-0 m-5 p-2 sm:hidden"
            title="Close Menu"
          >
            <VscChromeClose className="h-6 w-6 " />
          </button>
        )}
        <Link to="/" className="hidden sm:items-center md:flex">
          <StaticImage
            src="../../images/logo-icon-no-background.svg"
            alt="logo"
            layout="constrained"
            placeholder="blurred"
            className="aspect-square h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32"
          />

          <p className="ml-1 mr-4 text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </p>
        </Link>
        <Link
          to="/"
          className="mx-10 my-5 block border-b-4 border-secondary pb-4 md:hidden"
        >
          <StaticImage
            src="../../images/onefrankdesign-high-resolution.png"
            alt="logo"
            layout="constrained"
            placeholder="blurred"
          />
        </Link>

        <ul className="mt-8 space-y-7 sm:mt-0 sm:flex sm:space-x-4 sm:space-y-0 md:space-x-6 lg:space-x-3">
          {navigation?.map(
            (nav) =>
              nav?.path && (
                <li key={nav?.path}>
                  <Link
                    to={nav?.path}
                    className="font-medium text-accent hover:text-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {nav?.name}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
