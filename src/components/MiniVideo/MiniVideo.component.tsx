import React from 'react';
import { useHistory } from 'react-router-dom';

import { IProps } from './MiniVideo.component.typed';
import { MiniVideoWrapper } from './MiniVideo.component.styled';

function MiniVideo({ title, imageSrc, videoId }: IProps) {
  const history = useHistory();

  function goToVideo(id: string) {
    history.push(`/video/${id}`);
  }

  return (
    <MiniVideoWrapper
      onClick={() => {
        goToVideo(videoId);
      }}
    >
      <img src={imageSrc} alt={title} />
      <span>{title}</span>
    </MiniVideoWrapper>
  );
}

export default MiniVideo;
