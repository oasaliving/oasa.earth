import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>OASA is a web3 powered nature conservancy.</title>
    </Head>
    <main>
      <div className="flex flex-row justify-end items-center min-h-screen bg-background relative">
        <header className="fixed z-10 top-20 h-full flex flex-row justify-end left-0 bottom-0 w-1/3">
          <h1 className="text-2xl fixed top-[50vh] md:text-6xl text-primary">
            OASA is
          </h1>
        </header>
        <div className="w-2/3 relative space-y-32">
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">
              a nature conservancy.
              <br/><i className="text-xl">⬇️ Scroll</i>
            </p>
          </section>
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a tribe of guardians.</p>
          </section>
          {/* <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a collective of entrepreneurs, artists, crypto-enthusiasts, farmers, digital nomads, engineers, innovators, challengers to the status quo.</p>
          </section> */}
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">a network of regenerative living spaces in nature.</p>
          </section>
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">conserving 95% of its land as nature.</p>
          </section>
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">an experiment for DAO based local democracies.</p>
          </section>
          <section className="h-screen sticky top-[50vh] bg-background">
            <p className="text-2xl pl-2 md:pl-4 md:text-6xl text-primary h-screen font-bold">transitioning ownership into stewardship.</p>
          </section>
          <section className="h-screen sticky top-[50vh] left-0 -ml-[50vw] bg-primary relative z-10">
            <p className="text-2xl md:text-6xl h-screen font-bold"></p>
          </section>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center h-[140vh] bg-primary text-white relative z-10">
        <h2 className="text-2xl max-w-prose md:text-6xl font-bold mx-8 sticky top-[50vh] py-12">Changing the way we live is the most impactful way to regenerate ourselves and our planet.</h2>
      </div>
      <div className="bg-background relative z-10">
        <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
          <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">We see a future where traveling and living become one. Where you can have roots in multiple geographics. Where love and community stays with you no matter where you go.</p>
        </section>
        <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
          <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">Securing the interest of all living species (see <a href="https://docs.google.com/document/d/1Ocv9rtRkDxsJmeRxrL6mV07EyWcHc2YqfN8mHoylO2E/edit" target="_blank">Principles of Regeneration and Land Stewardship</a>)</p>
        </section>
        <section className="h-screen sticky p-8 top-[50vh] bg-background relative z-10">
          <p className="text-2xl max-w-prose md:w-1/2 md:text-3xl h-screen font-bold">Open sourcing our ideas, technology, legal templates to encourage other communities to replicate and scale our model. Using the power of web3 to secure the health of our ecosystems.</p>
        </section>
      </div>
      <div className="bg-background relative z-10">
        <div className="flex flex-col justify-center items-center h-screen bg-background text-black relative z-10">
          <Link href="/papers/OASA-Whitepaper-V1.2.pdf">
            <a className="btn-primary btn-large text-2xl md:text-6xl font-bold mt-16 sticky top-[50vh]" target="_blank">Read Whitepaper.</a>
          </Link>
        </div>
      </div>
    </main>
  </Layout>
);

export default Home;
