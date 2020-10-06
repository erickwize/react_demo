import React from 'react';

import Grid from '@material-ui/core/Grid';
import CardVideo from '../../components/CardVideo';
import { useApp } from '../../providers/App';
import { GridWrapper } from '../../components/GridWrapper';
import { SkeletonCard } from '../../components/CardVideo/CardVideo.component.styled';

function HomePage() {
  const { videos, favoriteVideos, isLoadingVideos } = useApp();

  const favoriteVideoIds = favoriteVideos.map((video) => video.id);

  const renderElements = () => {
    if (isLoadingVideos) {
      return Array(25)
        .fill(0)
        .map(() => <SkeletonCard />);
    }
    if (videos.length > 0) {
      return videos.map((video) => (
        <CardVideo
          key={video.id.videoId}
          imageSrc={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
          description={video.snippet.description}
          id={video.id.videoId}
          favorited={favoriteVideoIds.includes(video.id.videoId)}
        />
      ));
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridWrapper>{renderElements()}</GridWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
