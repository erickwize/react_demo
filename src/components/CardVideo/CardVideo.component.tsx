import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import image from '../../resources/image.jpg';

import { Card } from './CardVideo.styled';
import { IProps } from './CardVideo.typed';

function CardVideo({
  imageSrc,
  title = 'Youtube Video',
  description = 'Youtube video content Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
}: IProps) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia image={imageSrc || image} component="img" />
          <CardContent>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardVideo;
