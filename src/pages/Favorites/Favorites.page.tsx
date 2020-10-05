import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardVideo from '../../components/CardVideo';
import { useApp } from '../../providers/App';
import { GridWrapper } from '../../components/GridWrapper';

function Favorites() {
  const { favoriteVideos } = useApp();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <GridWrapper>
            {favoriteVideos.length > 0 &&
              favoriteVideos.map((video) => (
                <CardVideo
                  key={video.id}
                  imageSrc={video.imgSrc}
                  title={video.title}
                  description={video.description}
                  id={video.id}
                  favorited
                />
              ))}
          </GridWrapper>
        </Grid>
      </Grid>
    </>
  );
}

export default Favorites;
