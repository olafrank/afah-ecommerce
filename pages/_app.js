import React from 'react';
import { Layout } from '../Component';

import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )


}
