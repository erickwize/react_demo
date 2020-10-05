import styled from 'styled-components';
import BaseCard from '@material-ui/core/Card';

export const Card = styled(BaseCard)`
  max-width: 345px;
  position: relative;

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
`;
