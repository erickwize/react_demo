import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MiniVideo from '../../components/MiniVideo';
import { useYoutubeApi } from '../../providers/YoutubeProvider';
import {
  fetchRelatedVideos,
  fetchVideoInfo,
  truncateString,
} from '../../utils/functions';
import { VideoItem } from '../../utils/types';
import {
  VideoReproductor,
  VideoDetails,
  RelatedVideosSection,
} from './VideoDetail.page.styled';
import { ParamTypes } from './VideoDetail.page.typed';

function VideoDetail() {
  const { isAuthenticated } = useYoutubeApi();
  const { videoId } = useParams<ParamTypes>();
  const [relatedVideos, setRelatedVideos] = useState<Array<VideoItem>>([]);
  const [title, setTitle] = useState<string>('Loading...');
  const [description, setDescription] = useState<string>('Loading...');

  useEffect(() => {
    const getInfoAPI = async () => {
      const fetchedRelatedVideos = await fetchRelatedVideos(videoId);
      const videoInfo = await fetchVideoInfo(videoId);
      setRelatedVideos(fetchedRelatedVideos);
      if (videoInfo !== undefined) {
        setTitle(videoInfo.snippet.title);
        setDescription(truncateString(videoInfo.snippet.description, 200));
      }
    };

    if (isAuthenticated) {
      getInfoAPI();
    }
  }, [videoId, setRelatedVideos, isAuthenticated]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 64px)' }}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '56.25%',
            }}
          >
            <VideoReproductor
              title="Entreprenuer"
              src={`https://www.youtube.com/embed/${videoId}`}
            />
          </div>
          <VideoDetails>
            <span>{title}</span>
            <p>{description}</p>
          </VideoDetails>
        </div>
        <RelatedVideosSection>
          {relatedVideos.length > 0 &&
            relatedVideos.map((video) => {
              return (
                <MiniVideo
                  title={video.snippet.title}
                  imageSrc={video.snippet.thumbnails.high.url}
                  videoId={video.id.videoId}
                  key={video.id.videoId}
                />
              );
            })}
        </RelatedVideosSection>
      </div>
    </div>
  );
}

export default VideoDetail;
