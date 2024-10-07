import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col gap-4 p-5 text-center flex-center wrapper flex-between sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.png"}
            width={128}
            height={38}
            alt="Blogify"
          />
        </Link>
        <p>© 2024 Blogify. All rights reserved.</p>
        <p>Share Your Story | Shape the World</p>
      </div>
    </footer>
  );
};

export default Footer;
