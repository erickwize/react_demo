import styled from 'styled-components';

export const MiniVideoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  cursor: pointer;
  & img {
    max-width: 300px;
  }
  & span {
    flex-grow: 1;
    padding-top: 5px;
    padding-left: 10px;
  }
`;
