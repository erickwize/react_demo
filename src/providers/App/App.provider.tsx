import React, { createContext, useContext, useState } from 'react';
import { storage } from '../../utils/storage';
import { Video, VideoItem } from '../../utils/types';

import { Context, IProps } from './App.provider.typed';

const AppContext = createContext<Context>({
  setSearch: (search) => console.log(search),
  search: '',
  setVideos: (videos) => videos.forEach((video) => console.log(video)),
  videos: [],
  saveFavorite: (video) => console.log(video),
  favoriteVideos: [],
  removeFavorite: (videoId) => console.log(videoId),
});

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Can't use 'useApp' without an AppProvider");
  }

  return context;
}

function AppProvider({ children }: IProps) {
  const [search, setSearch] = useState<string>('');
  const [videos, setVideos] = useState<Array<VideoItem>>([]);
  const [favoriteVideos, setFavoriteVideos] = useState<Array<Video>>(
    storage.getVideosWithString(search)
  );

  return (
    <AppContext.Provider
      value={{
        setSearch: (searchValue) => {
          const favoriteSavedVideos = storage.getVideosWithString(searchValue);
          setFavoriteVideos(favoriteSavedVideos);
          setSearch(searchValue);
        },
        search,
        setVideos,
        videos,
        favoriteVideos,
        saveFavorite: (video) => {
          storage.saveVideo(video);
          const favoriteSavedVideos = storage.getVideosWithString(search);
          setFavoriteVideos(favoriteSavedVideos);
        },
        removeFavorite: (videoId) => {
          storage.removeVideo(videoId);
          const favoriteSavedVideos = storage.getVideosWithString(search);
          setFavoriteVideos(favoriteSavedVideos);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { useApp };
export default AppProvider;
