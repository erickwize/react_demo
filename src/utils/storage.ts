import { FAVORITES } from './constants';
import { Video } from './types';

interface Storage {
  get: (key: string) => Object | null;
  set: (key: string, value: Object | boolean) => void;
  getVideos: () => Video[];
  getVideosWithString: (str: string) => Video[];
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

  getVideosWithString(str) {
    const normalizedStr = str.toLowerCase().replace(/\s/g, '');
    const videos: Video[] = this.getVideos();
    return videos.filter((video) => video.title.toLowerCase().includes(normalizedStr));
  },

  getVideos() {
    return this.get(FAVORITES) || [];
  },

  saveVideo(video: Video) {
    const videos: Video[] = this.getVideos();
    const isVideoSaved = videos.some((savedVideo) => savedVideo.id === video.id);
    if (isVideoSaved) {
      return;
    }
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
