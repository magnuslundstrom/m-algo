import styled from 'styled-components';
import { colors, spacing } from '../variables';

export const StyledNode = styled.div`
  display: flex;
  .value-wrapper {
    background-color: ${colors.c300};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    p {
      color: ${colors.c100};
    }
  }
  p {
    color: black;
  }

  .arrow-wrapper {
    margin-left: ${spacing.md};
    margin-right: ${spacing.md};
  }

  .position {
    text-align: center;
  }
`;
