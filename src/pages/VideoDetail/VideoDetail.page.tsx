import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MiniVideo from '../../components/MiniVideo';
import { useYoutubeApi } from '../../providers/YoutubeProvider';
import { fetchRelatedVideos } from '../../utils/functions';
import { VideoItem } from '../../utils/types';
import {
  VideoReproductor,
  VideoDetails,
  RelatedVideosSection,
} from './VideoDetail.page.styled';
import { ParamTypes } from './VideoDetail.page.typed';

const mockedImg =
  'https://i.ytimg.com/vi/MhTDp5FwfmM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBinI77q8Iu3Be6GLTkWEZ7LfoHlg';

function VideoDetail() {
  const { isAuthenticated } = useYoutubeApi();
  const { videoId } = useParams<ParamTypes>();
  const [relatedVideos, setRelatedVideos] = useState<Array<VideoItem>>([]);

  useEffect(() => {
    const getRelatedVideos = async () => {
      const videos = await fetchRelatedVideos(videoId);
      console.log(videos);
      setRelatedVideos(videos);
    };
    console.log('isAuthenticated: ', isAuthenticated);

    if (isAuthenticated) {
      // getRelatedVideos();
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
            <span>Entreprenuer</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil nam
              nesciunt? Iusto corporis nihil odio deleniti temporibus maiores, minus
              aliquid nulla accusantium provident esse nostrum natus odit doloribus!
              Voluptatibus.
            </p>
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
          {/* <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} />
          <MiniVideo title="Entreprenuer" imageSrc={mockedImg} /> */}
        </RelatedVideosSection>
      </div>
    </div>
  );
}

export default VideoDetail;
