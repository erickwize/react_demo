import { VideoItem } from '../../utils/types';

export interface IProps {
  children: React.ReactNode;
}

export interface Context {
  setSearch: (search: string) => void;
  search: string;
  setVideos: (videos: VideoItem[]) => void;
  videos: VideoItem[];
}
