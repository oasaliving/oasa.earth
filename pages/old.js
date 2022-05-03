import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import api from '../utils/api';
import { useAuth } from '../contexts/auth.js'

const Home = ({ articles, error }) => {

  const { isAuthenticated, login } = useAuth();

  return (
    <Layout>
      <Head>
        <title>Oasa - Developing a network of DAO operated #regenerative villages.</title>
      </Head>
      <main className="main-content">
        <h1>Developing a network of regenerative villages</h1>
        <p>Join a commynity of entrepreneurs, artists, crypto-enthusiasts, farmers, digital nomads, engineers, innovators, challengers to the status quo.</p>
        { !isAuthenticated && <section>
          <Link href="/signup">
            <a className="btn-primary text-xl my-8">Become a member</a>
          </Link>
        </section> }
        <section className="card mt-8">
          <header className="card-title">
            <h3>Latest Articles</h3>
            <Link href="/search"><a>More articles</a></Link>
          </header>
          <div className="card-body article-previews md-flex md-flex-row">
            { error?
              <div className="validation-error">{error.message}</div>:
              articles ?
              articles.map(article => (
                <div className="article-preview md-w-1/3" key={ article._id }>
                  <Link as={ `/${article.slug}` } href="/[slug]">
                    <a role="button">
                    <span className="title">
                      {article.title}
                    </span>
                    { article.summary &&
                      <span className="summary">{ article.summary }</span>
                    }
                    </a>
                  </Link>
                </div>
              )):
              <div className="Loading">Loading...</div>
            }
          </div>
        </section>
      </main>
    </Layout>
  );
}

Home.getInitialProps = async ({ req, query }) => {
  try {
    const res = await api.get('/article?&limit=6&sort_by=-created');

    return {
      articles: res.data.results
    }
  } catch (err) {
    return {
      error: err.message
    };
  }
}

export default Home
