import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  const openDiscord = () => window.open(
      'https://discord.gg/C3UFFu5B9u',
      '_blank',
      'noopener,noreferrer'
  );

  return (
      <footer className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold">Contact.</h2>

            <div className="mt-10">
              <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-5xl font-bold">
                LET&apos;S CONNECT
              </h2>
              <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-5xl font-bold">
                ON DISCORD
              </h2>

              <Button
                  type="primary"
                  onClick={openDiscord}
                  className="mt-6 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="flex items-center gap-3">
                  <SiDiscord size={24} /> {/* size is in pixels */}
                  <span>Join Our Discord Server</span>
                </div>
              </Button>

              <div className="mt-10">
                {/* Socials component here */}
              </div>
            </div>
          </div>

          <div className="mt-10 laptop:mt-20 text-center">
            <p className="text-sm font-bold">
              Made With ❤ by{' '}
              <Link
                  href="https://mubu.dev"
                  className="underline underline-offset-1 hover:text-gray-300 transition-colors duration-300"
              >
                Mustafa Budak
              </Link>
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
