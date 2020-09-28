import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Card } from './CardVideo.styled';
import { IProps } from './CardVideo.typed';

function CardVideo({ imageSrc }: IProps) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia image={imageSrc} component="img" />
          <CardContent>
            <Typography>Youtube Video</Typography>
            <Typography>
              Youtube video content Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardVideo;
