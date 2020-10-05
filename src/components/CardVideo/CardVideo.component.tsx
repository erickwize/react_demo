import React, { useState } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoritedIcon from '@material-ui/icons/Favorite';

import image from '../../resources/image.jpg';

import { Card } from './CardVideo.styled';
import { IProps } from './CardVideo.typed';
import { storage } from '../../utils/storage';

function CardVideo({ imageSrc, title, description, id }: IProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <Grid item xs={4}>
      <Card>
        {isFavorite ? (
          <FavoritedIcon
            onClick={() => {
              setIsFavorite(false);
              storage.removeVideo(id);
            }}
          />
        ) : (
            <FavoriteIcon
              onClick={() => {
                setIsFavorite(true);
                storage.saveVideo({ title, description, id, imgSrc: imageSrc });
              }}
            />
          )}
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
