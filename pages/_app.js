// pages/_app.js
import { useState } from 'react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <Layout>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </Layout>
  );
}

export default App;
