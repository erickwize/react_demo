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

const fetchVideos = debounce((search: string, setVideos: Function) => {
  const { gapi } = window as any;

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
}, 500);

export { random, debounce, fetchVideos, filterVideos };
