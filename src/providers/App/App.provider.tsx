import React, { createContext, useContext, useState } from 'react';
import { VideoItem } from '../../utils/types';

import { Context } from './App.provider.typed';

const AppContext = createContext<Context>({
  setSearch: (f: any) => f,
  search: '',
  setVideos: (f: any) => f,
  videos: [],
});

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Can't use 'useApp' without an AppProvider");
  }

  return context;
}

function AppProvider({ children }: any) {
  const [search, setSearch] = useState<string>('');
  const [videos, setVideos] = useState<Array<VideoItem>>([]);

  return (
    <AppContext.Provider value={{ setSearch, search, setVideos, videos }}>
      {children}
    </AppContext.Provider>
  );
}

export { useApp };
export default AppProvider;
