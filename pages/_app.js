import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs/dist/browser';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}

export default App;
