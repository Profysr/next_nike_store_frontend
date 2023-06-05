import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = ({ title, description, src, slug, className }) => {
  return (
    <section>
      <div className="container px-5 mx-auto">
        {/* FIRST BLOG STARTS HERE */}
        <div
          className={`flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 ${className} sm:gap-4 flex-col`}
        >
          <div className="sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image
              alt={title}
              src={src}
              width={220}
              height={220}
              className="rounded-lg"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {title}
            </h2>
            <p className="leading-relaxed text-base">{description}</p>
            <Link
              href={slug}
              className="mt-3 text-indigo-500 inline-flex items-center"
            >
              Explore More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
        {/* FIRST BLOG ENDS HERE */}
      </div>
    </section>
  );
};

export default BlogPost;
