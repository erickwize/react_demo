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
  (search: string, setVideos: (videos: VideoItem[]) => void) => {
    const { gapi } = window as any;

    if (gapi.client === undefined) {
      setVideos([]);
      return;
    }

    gapi.client
      .request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}`,
      })
      .then(
        (response: YoutubeResponse) => {
          setVideos(filterVideos(response.result.items));
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
    const { result }: YoutubeResponse = await gapi.client.request({
      path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video`,
    });
    return result.items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { random, debounce, fetchVideos, filterVideos, fetchRelatedVideos };
