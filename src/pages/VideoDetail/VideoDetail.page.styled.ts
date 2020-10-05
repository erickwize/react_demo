import styled from 'styled-components';

export const VideoReproductor = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const RelatedVideosSection = styled.div`
  min-width: 40%;
  max-width: 40%;
  height: 100%;
  border-left: 1px solid black;
  overflow-y: scroll;
`;

export const VideoDetails = styled.div`
  margin: 10px 10px 0px 10px;

  & span {
    display: block;
    font-size: 1.5em;
  }
`;
