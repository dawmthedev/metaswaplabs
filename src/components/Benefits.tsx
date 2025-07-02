import React from 'react';

const Benefits = () => {
  return (
    <section id="benefits" data-scroll-section className="my-32 space-y-10 text-center">
      <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl">More Than a Service. A Partnership.</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md glass p-6 fade-in">
          <span className="text-xl font-semibold">🚀 Faster Time to Market</span>
        </div>
        <div className="rounded-md glass p-6 fade-in">
          <span className="text-xl font-semibold">💡 Expert Guidance</span>
        </div>
        <div className="rounded-md glass p-6 fade-in">
          <span className="text-xl font-semibold">📈 Scalable Solutions</span>
        </div>
        <div className="rounded-md glass p-6 fade-in">
          <span className="text-xl font-semibold">🤝 Dedicated Support</span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
