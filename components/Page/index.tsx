import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import type { Router } from "next/router";
import { Header, Text, Banner, Footer } from "pinus-ui-library";
import { navLinks } from "./links";
import { columns } from "./columns";
import Image from "next/image";
import Link from "next/link";
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'

interface OwnProps {
  title: string;
  children: React.ReactNode;
  router: Router;
}

const Page: React.FC<OwnProps> = ({
  title,
  children,
}) => {
  const contactFooter = (
    <div className={`w-48 lg:w-content`}>
      <p className={`font-bold lg:text-base mb-5`}>Contact Us</p>
      <p className={`text-xs lg:text-sm mb-10 lg:mb-5`}>
        Feel free to drop us a message. We would love to hear from you!
      </p>
      <div className={`flex flex-row w-14 justify-between`}>
        <Link
          href="https://www.facebook.com/PerhimpunanIndonesiaNUS/"
          key="facebook-icon"
        >
          <a target="_blank">
            <Image
              alt="Facebook profile"
              src={fb}
              height={20}
              width={20}
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/pinusonline" key="instagram-icon">
          <a target="_blank">
            <Image
              alt="Instagram profile"
              src={ig}
              height={20}
              width={20}
            />
          </a>
        </Link>
      </div>
    </div>
  );

  const headers = navLinks.map((entry) => {
    return {
      label: <Text color="white"> {entry.title} </Text>,
      url: "/" + entry.slug,
    };
  });
  const homeLink = "./";
  return (
    <div className={`flex flex-col items-center overflow-hidden`}>
      <Head>
        <title>{`${title} | PINUS`}</title>
      </Head>
      <div className="w-full flex flex-col items-center bg-gray-500">
          <Header
            headerTitle={
              <Text fontSize="2xl" fontWeight="bold" color="white">
                PINUS Tech
              </Text>
            }
            headers={headers}
            homeLink={homeLink}
            isLoginSupported={false}
          />
      </div>
      <div className={`min-h-screen w-full`}>{children}</div>
      <Footer links={columns} rightSide={contactFooter} logoTitle= {<Text fontSize="4xl" fontWeight="bold">PINUS Tech</Text>} />
    </div>
  );
};

export default withRouter(Page);
