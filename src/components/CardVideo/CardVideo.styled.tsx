import styled from 'styled-components';
import BaseCard from '@material-ui/core/Card';

export const Card = styled(BaseCard)`
  width: 400px;
  height: 500px;
  margin: 10px;
  position: relative;
  flex-basis: calc(20% - 20px);

  svg {
    opacity: 0;
    position: absolute;
  }

  &:hover svg {
    opacity: 1;
    fill: white;
    position: absolute;
    z-index: 10;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  @media (max-width: 1333px) {
    flex-basis: calc(25% - 20px);
  }
  @media (max-width: 1073px) {
    flex-basis: calc(33.33% - 20px);
  }
  @media (max-width: 815px) {
    flex-basis: calc(50% - 20px);
  }
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`;
