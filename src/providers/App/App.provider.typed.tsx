import { VideoItem } from '../../utils/types';

export interface Context {
  setSearch: Function;
  search: string;
  setVideos: Function;
  videos: VideoItem[];
}
