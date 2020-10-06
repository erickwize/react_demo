import {
  mockedHomeVideos,
  mockedRelatedVideos,
  mockedVideoDetailInfo,
} from './mockedData';
import { VideoItem, YoutubeResponse } from './types';

function random(limit: number) {
  return Math.floor(Math.random() * limit);
}

function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return async function hofWrapper(...args: any[]) {
    async function laterFunction(resolve: Function) {
      resolve(await func(...args));
    }
    clearTimeout(timeout);
    const value = await new Promise((resolve) => {
      timeout = setTimeout(() => {
        laterFunction(resolve);
      }, wait);
    });
    return value;
  };
}

function filterVideos(videos: VideoItem[]) {
  return videos.filter((video) => video.snippet);
}

const fetchVideos = debounce(
  (
    search: string,
    setVideos: (videos: VideoItem[]) => void,
    setIsLoading: (loading: boolean) => void
  ) => {
    const { gapi } = window as any;
    setIsLoading(true);

    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setVideos(mockedHomeVideos);
        setIsLoading(false);
      }, 1000);
      return;
    }

    if (gapi.client === undefined) {
      setVideos([]);
      setIsLoading(false);
      return;
    }

    gapi.client
      .request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}`,
      })
      .then(
        (response: YoutubeResponse) => {
          setVideos(filterVideos(response.result.items));
          setIsLoading(false);
        },
        (reason: any) => {
          console.error(`Error: ${reason}`);
        }
      );
  },
  500
);

const fetchRelatedVideos = async (videoId: string) => {
  const { gapi } = window as any;
  try {
    if (process.env.NODE_ENV === 'development') {
      const results = await new Promise<VideoItem[]>((resolve) => {
        setTimeout(() => {
          resolve(mockedRelatedVideos);
        }, 4000);
      });
      return results;
    }

    const { result }: YoutubeResponse = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video`,
    });
    return result.items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchVideoInfo = async (videoId: string) => {
  const { gapi } = window as any;
  try {
    if (process.env.NODE_ENV === 'development') {
      return mockedVideoDetailInfo;
    }

    const { result }: YoutubeResponse = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}`,
    });
    return result.items[0];
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const truncateString = (str: string, length: number) => `${str.substr(0, length)}...`;

export {
  random,
  debounce,
  fetchVideos,
  filterVideos,
  fetchRelatedVideos,
  fetchVideoInfo,
  truncateString,
};
