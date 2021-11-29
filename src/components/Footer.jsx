import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 px-5 lg:px-16 xl:px-24 2xl:px-40 md:flex justify-between items-center text-center">
      <h1 className="text-lg md:text-2xl text-[#e13c33]">
        Welcome to crypto clones
      </h1>
      <h1 className="text-lg md:text-2xl text-[#e13c33] mt-2 md:mt-0">
        Follow us
      </h1>
      <div className="flex items-center justify-center md:justify-start mt-8 md:mt-0">
        <a href="https://discord.gg/GvGnrMV7jz">
          <BsDiscord className="text-white text-3xl md:text-[2.5rem] mr-10" />
        </a>
        <a href="https://twitter.com/cryptoclonesnft">
          <BsTwitter className="text-[#e13c33] text-3xl md:text-[2.5rem]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
