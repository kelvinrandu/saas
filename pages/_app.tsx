'use client';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { useEffect, useState } from 'react';
import '@/styles/App.css';
import '@/styles/globals.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';

function App({ Component, pageProps }: AppProps<{}>) {
  const [apiKey, setApiKey] = useState('');
  useEffect(() => {
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-') && apiKey !== initialKey) {
      setApiKey(initialKey);
    }
  }, [apiKey]);

  return (
    <ChakraProvider theme={theme}>
      <Component apiKeyApp={apiKey} {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
