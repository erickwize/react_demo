import React from 'react';

import Grid from '@material-ui/core/Grid';
import CardVideo from '../../components/CardVideo';
import { useApp } from '../../providers/App';
import { GridWrapper } from '../../components/GridWrapper';

function HomePage() {
  const { videos, favoriteVideos } = useApp();

  const favoriteVideoIds = favoriteVideos.map((video) => video.id);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridWrapper>
            {videos.length > 0 &&
              videos.map((video) => (
                <CardVideo
                  key={video.id.videoId}
                  imageSrc={video.snippet.thumbnails.high.url}
                  title={video.snippet.title}
                  description={video.snippet.description}
                  id={video.id.videoId}
                  favorited={favoriteVideoIds.includes(video.id.videoId)}
                />
              ))}
          </GridWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
