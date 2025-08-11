import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() =>
    createBrowserClient(
      'https://iehtqjmbbvxcsodldyxg.supabase.co',
      'sb_publishable__RHDT3DAKr09hFUH5VsTeQ_E7kIsjkr'
    )
  );

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
