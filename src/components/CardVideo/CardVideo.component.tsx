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
import { useAuth } from '../../providers/Auth';

function CardVideo({ imageSrc, title, description, id, favorited = false }: IProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(favorited);
  const { authenticated } = useAuth();
  const { saveFavorite, removeFavorite } = useApp();
  const history = useHistory();

  const favoriteIconRender = () => {
    if (authenticated) {
      if (isFavorite) {
        return (
          <FavoritedIcon
            onClick={(evt) => {
              evt.stopPropagation();
              setIsFavorite(false);
              removeFavorite(id);
            }}
          />
        );
      }
      return (
        <FavoriteIcon
          onClick={(evt) => {
            evt.stopPropagation();
            setIsFavorite(true);
            saveFavorite({ title, description, id, imgSrc: imageSrc });
          }}
        />
      );
    }
    return null;
  };

  return (
    <Card
      onClick={() => {
        history.push(`/video/${id}`);
      }}
    >
      {favoriteIconRender()}
      <CardActionArea>
        <CardMedia image={imageSrc || image} component="img" />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardVideo;
