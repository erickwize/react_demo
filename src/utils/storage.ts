import { FAVORITES } from './constants';
import { VideoItem } from './types';

interface Video {
  title: string;
  id: string;
  imgSrc: string;
  description: string;
}

interface Storage {
  get: (key: string) => Object | null;
  set: (key: string, value: Object | boolean) => void;
  getVideos: () => Video[];
  saveVideo: (video: Video) => void;
  removeVideo: (videoId: string) => void;
}

const storage: Storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      if (rawValue) return JSON.parse(rawValue);
      return null;
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  getVideos() {
    return this.get(FAVORITES) || [];
  },

  saveVideo(video: Video) {
    const videos: Video[] = this.getVideos();
    videos.push(video);
    this.set(FAVORITES, videos);
  },

  removeVideo(videoId: string) {
    const videos: Video[] = this.getVideos();
    const filteredVideos = videos.filter((video) => video.id !== videoId);
    this.set(FAVORITES, filteredVideos);
  },
};

export { storage };
