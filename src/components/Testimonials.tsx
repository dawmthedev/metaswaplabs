import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" data-scroll-section className="my-32 space-y-10 py-20 text-center">
      <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl text-foreground">What Our Clients Say</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <div className="rounded-md glass p-6 fade-in">
          <p className="text-sm text-muted-foreground">&quot;Metaswap Labs built our web app from the ground up and helped us scale to our first 1,000 users. Their expertise was invaluable.&quot;</p>
        </div>
        <div className="rounded-md glass p-6 fade-in">
          <p className="text-sm text-muted-foreground">&quot;The new marketing site they built for us has been a game-changer. Our conversion rates have doubled.&quot;</p>
        </div>
        <div className="rounded-md glass p-6 fade-in">
          <p className="text-sm text-muted-foreground">&quot;Working with Metaswap Labs was a breeze. They are true professionals who deliver on their promises.&quot;</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
