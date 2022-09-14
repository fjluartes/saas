import React from 'react';
import Head from 'next/head';

import Link from 'next/link';

import Layout from '../components/layout';

const Index = () => (
  <Layout firstGridItem={true}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '15px', height: '100%' }}>
      <p>Content on Index page</p>
      <Link href="/csr-page" as="/csr-page">
        <a>Go to CSR page</a>
      </Link>
      <p />
      <i className="material-icons">menu</i>
    </div>
  </Layout>
);

export default Index;
