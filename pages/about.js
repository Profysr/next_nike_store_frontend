import AboutBlogs from "@/components/AboutBlogs";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { BsFillBagCheckFill, BsFillHeartFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";

const about = () => {
  return (
    <>
      <Image
        alt="about image"
        width={1100}
        height={500}
        src="/wrapper.jpg"
        class="object-cover object-center w-full h-full"
      />
      <Wrapper>
        <section class="body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-semibold text-4xl mb-2 text-gray-900">
                  Unleash Your Potential
                </h1>
                <div class="leading-relaxed text-xl">
                  Nike believes in the power of sports to transform lives. It's
                  not just about physical fitness; it's about embracing
                  challenges, setting goals, and surpassing them. With Nike, you
                  can tap into your inner strength and reach new heights.
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 cursor-pointer">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-tight flex gap-1">
                  Purchase
                  <BsFillBagCheckFill />
                </p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 cursor-pointer">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p class="leading-tight flex gap-1 items-center">
                  Reacts
                  <BsFillHeartFill />
                </p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2 cursor-pointer">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  3.5K
                </h2>
                <p class="leading-tight flex gap-1">
                  Likes
                  <FaThumbsUp />
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <Image
                src="/blog1.jpg"
                alt="blogImage"
                width={600}
                height={300}
              />
            </div>
          </div>
        </section>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[34px] md:text-[54px] mb-5 font-bold leading-tight">
            Get Ready to Ignite Your Inner Athlete
          </div>
          <div className="text-md md:text-xl">
            If you're ready to unleash your inner athlete and embrace the power
            of sport, Nike is here to support you every step of the way
          </div>
        </div>
        <AboutBlogs />
      </Wrapper>
    </>
  );
};

export default about;
