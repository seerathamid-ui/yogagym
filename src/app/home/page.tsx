import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <figure className="md:flex bg-slate-400 rounded-xl p-10 md:p-0 dark:bg-slate-900">
        <img
          className="w-50 h-50 md:w-80 md:h-auto md:rounded-none rounded-half mx-auto"
          src="/image/shopping-logo-vector-7928282.jpg"
          alt="no img"
          width="184"
          height="712"
        />
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “To become a fashion designer there are many duties to take on.
              One is attending a college that consists of 1 to 4 years of
              learning for that specific career. Other duties are Learning about
              textiles, fabrics, and how to make different apparel such as
              shoes, coats, or clothes and more, having good communication
              skills and a sense for trend setting as well as a vibe for mix and
              matching apparels and making them look right. I probably would be
              working a full time schedule due to the great amount of work there
              would be. The work setting would be a warm environment and safe.
              It would be a place to let you mind wander and would leave you to
              want to move on to your next achievement in that work place. This
              career would lead your future into becoming something successful
              for you and you life. You would be making the amount of about
              ($30,000.00 to $70,000.00) or more or maybe even less.”
            </p>
          </blockquote>
          <figcaption className="font-bold">
            <div className="text-black-500 dark:text-sky-400">SEERAT HAMID</div>
            <div className="text-slate-700 dark:text-slate-500">
              WEB DEVELOPER
            </div>
            <h1 className="flex justify-center items-center	text-wrap	  decoration-1	text-[50px] mt-36  text-center text-black-50  bg-gradient-to-r from-violet-500 to-fuchsia-500">
        HISTORY OF <br></br>
        FASHION
      </h1>
      <img
        className="w-50px h-40px"
        src="/image/womens-clothes-set-isolated-female-clothing-collage-accessories-130694655.webp"
        alt="no image"
      />
      <Link
        className="border border-yellow-600 bg-yellow-600 ml-[620px] p-2 rounded-sm justify-center items-center flex mt-5"
        href={"/choosefashion"}
      >
        choosefashion
      </Link>
          </figcaption>
        </div>
      </figure>
    </div>
    
  );
}
