import React from "react";
import "../styles/Footer.css"
import { Typography } from "@material-tailwind/react";
 
const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between footer">
      <Typography color="blue-gray" className="font-normal copyright">
        &copy; 2023 Bubba
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 dev-links">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            GitHub
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;