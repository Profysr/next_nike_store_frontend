import Image from "next/image";
import React from "react";

const HeroGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl md:text-4xl text-xl font-semibold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Superior Performance Gear
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            From running shoes that provide optimal cushioning and support to
            breathable activewear that keeps you cool during intense workouts,
            Nike's products are designed to enhance your performance and help
            you achieve your best.
          </p>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row md:-m-2 -m-1">
          {/* FIRST GALLERY STARTS  */}
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={500}
                height={300}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg "
                src="/gallery1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={501}
                height={301}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg "
                src="/gallery3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={600}
                height={360}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-lg "
                src="/galleryMain1.jpg"
              />
            </div>
          </div>
          {/* FIRST GALLERY ENDS  */}

          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={601}
                height={361}
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-lg "
                src="/galleryMain2.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={502}
                height={302}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg "
                src="/gallery2.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={503}
                height={303}
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-lg "
                src="/gallery4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
