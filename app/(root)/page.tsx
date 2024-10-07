import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="py-5 bg-contain bg-primary-50 bg-dotted-pattern md:py-10">
        <div className="grid grid-cols-1 gap-5 wrapper md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Your Voice, Your Platform, Your Insights—Start Blogging Today
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Join a community of passionate writers and storytellers. Blogify
              is the platform where your thoughts turn into impactful stories.
              Start blogging today and connect with readers around the world.
            </p>
            <Button size={"lg"} asChild className="w-full button sm:w-fit">
              <Link href={"#blogs"}>Explore Blogs</Link>
            </Button>
          </div>
          <Image
            src={"/assets/images/hero.png"}
            alt="Hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="blogs"
        className="flex flex-col gap-8 my-8 wrapper md:gap-12"
      >
        <h2 className="h2-bold">
          Stay Updated with <br />
          Trending Stories and Unique Voices.
        </h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          {/* Search
          CategoryFilter */}
        </div>
      </section>
    </>
  );
}
