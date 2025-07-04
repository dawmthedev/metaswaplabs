import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <section
      id="cta"
      data-scroll-section
      className="glass bg-white00 my-32 w-[80vw]  bg-white py-20 text-center fade-in"
    >
      <h2 className="text-3xl font-semibold text-background">
        Ready to Build and Scale Your Vision?
      </h2>
      <Link href="/contact" passHref>
        <button className="mt-6 rounded-md bg-background px-6 py-3 text-primary hover:scale-105 sm:text-lg">
          Let&apos;s Talk →
        </button>
      </Link>
    </section>
  );
};

export default CTASection;
