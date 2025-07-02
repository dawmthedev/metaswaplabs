import React from 'react';

const Process = () => {
  return (
    <section id="process" data-scroll-section className="my-32 space-y-10 text-center">
      <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl">Our Process</h2>
      <div className="mx-auto flex max-w-4xl justify-center space-x-10 px-6">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl font-semibold">1. Discovery</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl font-semibold">2. Development</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-2xl font-semibold">3. Deployment</span>
        </div>
      </div>
      <p className="mx-auto max-w-xl text-muted-foreground">A streamlined process to bring your vision to life.</p>
    </section>
  );
};

export default Process;
