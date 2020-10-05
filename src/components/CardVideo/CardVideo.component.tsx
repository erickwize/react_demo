import React, { useState } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoritedIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';

import image from '../../resources/image.jpg';

import { Card } from './CardVideo.styled';
import { IProps } from './CardVideo.typed';
import { useApp } from '../../providers/App';

function CardVideo({ imageSrc, title, description, id, favorited = false }: IProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(favorited);
  const { saveFavorite, removeFavorite } = useApp();
  const history = useHistory();
  return (
    <Grid item xs={4}>
      <Card
        onClick={() => {
          history.push(`/video/${id}`);
        }}
      >
        {isFavorite ? (
          <FavoritedIcon
            onClick={(evt) => {
              evt.stopPropagation();
              setIsFavorite(false);
              removeFavorite(id);
            }}
          />
        ) : (
            <FavoriteIcon
              onClick={(evt) => {
                evt.stopPropagation();
                setIsFavorite(true);
                saveFavorite({ title, description, id, imgSrc: imageSrc });
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
