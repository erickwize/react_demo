import React, { createContext, useContext, useEffect, useState } from 'react';

import { Context } from './Youtube.provider.typed';

const YoutubeContext = createContext<Context>({
  isAuthenticated: false,
});

function useYoutubeApi() {
  const context = useContext(YoutubeContext);

  if (!context) {
    throw new Error("Can't use 'useYoutubeApi' without an YoutubeProvider");
  }

  return context;
}

function YoutubeProvider({ children }: any) {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const { gapi } = window as any;
    async function start() {
      await gapi.client.init({
        apiKey: process.env.REACT_APP_API_CLIENT_KEY,
      });
      setAuthenticated(true);
    }

    gapi.load('client', start);
  }, []);

  return (
    <YoutubeContext.Provider value={{ isAuthenticated }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export { useYoutubeApi };
export default YoutubeProvider;
