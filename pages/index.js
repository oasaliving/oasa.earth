import Link from 'next/link';

const Home = () => (
  <div>
    <div className="flex flex-row justify-end items-center min-h-screen bg-background relative">
      <header className="fixed z-10 top-20 h-full flex flex-row justify-end left-0 bottom-0 w-1/3">
        <h1 className="text-2xl fixed top-[50vh] md:text-6xl text-primary">
          OASA is
        </h1>
      </header>
      <main className="w-2/3 relative space-y-32">
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a tribe of guardians.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a nature conservancy.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a collective of entrepreneurs, dreamers, and artists.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a network of regenerative living spaces in nature.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">conserving 95% of its land as nature.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a DAO controlled habitat for humans+nature.</p>
        </section>
        <section className="h-screen sticky top-[50vh] bg-background">
          <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">transitioning ownership into stewardship.</p>
        </section>
        <section className="h-screen sticky top-[50vh] left-0 -ml-[50vw] bg-primary relative z-10">
          <p className="text-2xl md:text-6xl h-screen font-bold"></p>
        </section>
      </main>
    </div>
    <div className="flex flex-row justify-end items-center h-[140vh] bg-primary text-white relative z-10">
      <h2 className="text-2xl max-w-prose md:text-6xl font-bold mx-8 sticky top-[50vh] py-12">Changing the way we live is the most impactful way to regenerate ourselves and our planet.</h2>
    </div>
    <div className="bg-background relative z-10">
      <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
        <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">We see a future where traveling and living become one. Where you can have roots in multiple geographics. Where love and community stays with you no matter where you go.</p>
      </section>
      <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
        <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">Securing the interest of all living species through our Regenerative Land Use Agreement.</p>
      </section>
      <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
        <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">Open sourcing our ideas, technology, legal templates to encourage other communities to replicate and scale our model.</p>
      </section>
      <section className="h-screen sticky top-[50vh] left-0 -ml-[50vw] bg-background relative z-10">
        <p className="text-2xl md:text-6xl h-screen font-bold"></p>
      </section>
    </div>
    <div className="bg-background relative z-10">
      <div className="flex flex-col justify-center items-center h-screen bg-background text-black relative z-10">
        <h3 className="text-2xl md:text-6xl font-bold mx-8 sticky top-[50vh]">What's your dream?</h3>
      </div>
      <div className="flex flex-col justify-center items-center h-screen bg-background text-black relative z-10">
        <Link href="/signup">
          <a className="btn-primary btn-large text-2xl md:text-6xl font-bold mt-16 sticky top-[50vh]">Let's make it happen.</a>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center h-screen bg-background text-black relative">
        <p className="text-2xl md:text-6xl font-bold mt-16 sticky top-[50vh]">Let's make a difference.</p>
      </div>
    </div>
  </div>
);

export default Home;
