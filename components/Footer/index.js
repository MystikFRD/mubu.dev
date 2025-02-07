import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div className="max-w-screen-xl mx-auto">
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold">Contact.</h2>
            <div className="mt-10">
              <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
                LET&apos;S WORK
              </h2>
              <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-bold">
                TOGETHER
              </h2>
              <a
                  href="https://discord.gg/C3UFFu5B9u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 hover:opacity-80 transition-opacity duration-300 inline-block bg-black text-white text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg"
              >
                Join on Discord
              </a>
              <div className="mt-10">
                <Socials />
              </div>
            </div>
          </div>

          {/* Credits Section */}
          <div className="mt-10 laptop:mt-20 text-center">
            <p className="text-sm font-bold">
              Made With ❤ by{" "}
              <Link
                  href="http://mubu-jt66mkdga-mystiklfts-projects.vercel.app"
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
