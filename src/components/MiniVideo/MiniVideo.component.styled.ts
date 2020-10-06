import styled, { keyframes } from 'styled-components';

const appearDisapperAnimation = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const SkeletonImage = styled.div`
  background-color: gainsboro;
  width: 300px;
  height: 100%;
  animation: ${appearDisapperAnimation} 3s infinite forwards;
`;

export const SkeletonSpan = styled.div`
  background-color: gainsboro;
  margin: 5px 10px;
  height: 18px;
  width: 100%;
  animation: ${appearDisapperAnimation} 3s infinite forwards;
`;

export const MiniVideoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  max-height: 225px;
  height: 225px;

  cursor: pointer;
  & img {
    width: 300px;
    max-width: 300px;
  }
  & span {
    flex-grow: 1;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
