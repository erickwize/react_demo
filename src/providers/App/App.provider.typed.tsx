import { VideoItem, Video } from '../../utils/types';

export interface IProps {
  children: React.ReactNode;
}

export interface Context {
  setSearch: (search: string) => void;
  search: string;
  setVideos: (videos: VideoItem[]) => void;
  videos: VideoItem[];
  favoriteVideos: Video[];
  saveFavorite: (video: Video) => void;
  removeFavorite: (video: string) => void;
  openLogin: boolean;
  setOpenLogin: (open: boolean) => void;
  isLoadingVideos: boolean;
  setIsLoadingVideos: (loading: boolean) => void;
  isLoadingRelatedVideos: boolean;
  setIsLoadingRelatedVideos: (loading: boolean) => void;
}
