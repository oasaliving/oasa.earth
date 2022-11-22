import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Head>
      <title>Coliving positioning map</title>
      <meta name="description" content="A study of how the different coliving platforms compare on sustainability, sense of community, cost and other factors." />
      <meta name="twitter:image" content="https://oasa.co/images/locations/cape-town.jpg" />
    </Head>
    <main>
      <section className="main-content intro">
        <h1>Coliving positioning map</h1>
        <p>Coliving is the concept of sharing living space with an intentional community. If you are just starting to figure out what kind of coliving spaces make sense for you, this coliving positioning map is for you.</p>
      </section>
      <section className="main-content fullwidth">
        <h2>Length of stay</h2>
        <p className="limit-width">
          Fostering a sense of community is going to be very different whether you stay for two days or two months.&nbsp;
          This graphic will give you a sense of what a typical stay in one of these coliving spaces looks like.
        </p>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              &lt; 1 week
              <div className="point">
                Airbnb
              </div>
            </div>
            <div className="label">
              2 weeks
              <div className="point">
                Selina
              </div>
              <div className="point top offset">
                Swiss Escape
              </div>
            </div>
            <div className="label">
              1 month
              <div className="point">
                Outsite
              </div>
              <div className="point top mid">
                Wifi Tribe
              </div>
              <div className="point mid-offset">
                Sende
              </div>
            </div>
            <div className="label">
              3 months
              <div className="point top">
                Outpost
              </div>
            </div>
            <div className="label">
              6 months
              <div className="point offset top">
                Lightning Society
              </div>
              <div className="point mid">
                Oasa
              </div>
            </div>
            <div className="label">
              12 months +
              <div className="point top">
                HubHaus
              </div>
              <div className="point offset">
                Bungalow
              </div>
              <div className="point top mid">
                Quarters
              </div>
              <div className="point end">
                Senior coops
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content fullwidth">
        <h2>Sustainability</h2>
        <p className="limit-width">Did the coliving implement effective strategies to limit its footprint?</p>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              Uses lots of external resources
              <div className="point">
                Traditional housing
              </div>
              <div className="point offset top">
                Quarters
              </div>
              <div className="point mid">
                Bungalow
              </div>
              <div className="point top mid-offset">
                Common
              </div>
              <div className="point end">
                Outsite
              </div>
            </div>
            <div className="label">
              Partly self reliant / low impact
              <div className="point end">
                Sende
              </div>
              <div className="point top mid">
                Pandora Hub
              </div>
            </div>
            <div className="label">
              Mostly self reliant
              <div className="point top offset">
                Oasa
              </div>
              <div className="point end">
                Eco villages
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content fullwidth">
        <h2>Sense of community</h2>
        <p className="limit-width">
          How many events are organized each week?&nbsp;
          Do people actually meet and become friends?&nbsp;
          Would you leave your valuables out?&nbsp;
        </p>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              No sense of belonging
              <div className="point">
                Bungalow
              </div>
              <div className="point top offset">
                Selina
              </div>
              <div className="point mid">
                WeLive
              </div>
              <div className="point top mid-offset">
                Common
              </div>
              <div className="point end">
                Quarters
              </div>
            </div>
            <div className="label">
              Some participation
              <div className="point top">
                Outpost
              </div>
              <div className="point offset">
                Outsite
              </div>
              <div className="point mid top">
                Roam
              </div>
              <div className="point mid-offset">
                Remote year
              </div>
              <div className="point top end">
                Pandora Hub
              </div>
            </div>
            <div className="label">
              Mostly about community
              <div className="point">
                Lightning Society
              </div>
              <div className="point top offset">
                Oasa
              </div>
              <div className="point mid">
                Wifi Tribe
              </div>
              <div className="point mid-offset top">
                Nomad Cruise
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content fullwidth">
        <h2>Cost of living</h2>
        <p>These are sample figures, actual cost might vary based on time of year, location etc.</p>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              $2500+ / month
              <div className="point">
                Roam
              </div>
              <div className="point mid">
                WeLive
              </div>
              <div className="point top offset">
                Embassy Network
              </div>
              <div className="point end">
                Outsite
              </div>
            </div>
            <div className="label">
              $1250-$2500 / month
              <div className="point top">
                Lightning Society
              </div>
              <div className="point">
                Common
              </div>
              <div className="point top mid">
                Bungalow
              </div>
              <div className="point mid">
                Outpost
              </div>
            </div>
            <div className="label">
              &lt; $1250
              <div className="point top">
                Oasa
              </div>
              <div className="point mid">
                Sende
              </div>
              <div className="point top mid">
                Pandora Hub
              </div>
              <div className="point end">
                Eco villages
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-content fullwidth">
        <h2>Quality of comfort</h2>
        <p className="limit-width">What amenities are provided? How private are the rooms? Does you have dedicated workspaces?</p>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              Rustic living
              <div className="point">
                Eco villages
              </div>
              <div className="point top offset">
                Pandora Hub
              </div>
              <div className="point mid-offset">
                Sende
              </div>
            </div>
            <div className="label">
              Mid range
              <div className="point">
                Bungalow
              </div>
              <div className="point top offset">
                Selina
              </div>
              <div className="point mid">
                Outsite
              </div>
              <div className="point top mid-offset">
                Outpost
              </div>
              <div className="point end">
                Airbnb+
              </div>
            </div>
            <div className="label">
              Unique amenities, quality design
              <div className="point">
                Embassy Network
              </div>
              <div className="point top offset">
                Roam
              </div>
              <div className="point mid">
                Oasa
              </div>
              <div className="point end">
                Airbnb Lux
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="main-content fullwidth">
        <h2>Ownership</h2>
        <div className="comparator-line">
          <div className="line">
            <div className="label">
              VC / investor owned
              <div className="point">
                Corporate colivings
              </div>
              <div className="point end">
                Sende
              </div>
            </div>
            <div className="label">
              Mid range
              <div className="point">
                Corporate colivings
              </div>
              <div className="point top mid">
                Selina
              </div>
              <div className="point end">
                Outsite
              </div>
            </div>
            <div className="label">
              Unique amenities, quality design
              <div className="point top">
                Airbnb+
              </div>
              <div className="point mid">
                Oasa
              </div>
              <div className="point end">
                Airbnb Lux
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  </Layout>
);
