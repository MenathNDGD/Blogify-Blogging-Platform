import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <Link href={"/"} className="w-36">
          <Image
            src={"/assets/images/logo.png"}
            width={128}
            height={38}
            alt="Blogify"
          />
        </Link>

        <SignedIn>
          <nav className="hidden w-full max-w-xs md:flex-between">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex justify-end w-32 gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button asChild className="rounded-full" size={"lg"}>
                <Link href={"/sign-in"}>Login</Link>
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
