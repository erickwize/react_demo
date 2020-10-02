import { VideoItem } from '../../utils/types';

export interface Context {
  setSearch: (search: string) => void;
  search: string;
  setVideos: (videos: VideoItem[]) => void;
  videos: VideoItem[];
}
