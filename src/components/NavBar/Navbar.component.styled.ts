import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  @media (min-width: 600px) {
    width: auto;
    margin-left: 24px;
  }
`;

export const SearchIconWrapper = styled.div`
  padding: 0px 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GrowRemainingSpace = styled.div`
  flex-grow: 1;
`;

export const SearchInput = styled(InputBase)`
  color: inherit;
  input {
    padding: 8px 8px 8px 0;
    padding-left: calc(1em + 32px);
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: '100%';
  }
  @media (min-width: 960px) {
    input {
      width: 20ch;
    }
  }
`;

export const Title = styled(Typography)`
  cursor: pointer;
`;
