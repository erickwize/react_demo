import React from 'react';

import Grid from '@material-ui/core/Grid';
import CardVideo from '../../components/CardVideo';
import { useApp } from '../../providers/App';

function HomePage() {
  const { videos } = useApp();

  return (
    <>
      <Grid container>
        {videos.length > 0 &&
          videos.map((video) => (
            <CardVideo
              key={video.id.videoId}
              imageSrc={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              id={video.id.videoId}
            />
          ))}
      </Grid>
    </>
  );
}

export default HomePage;
