import styled from 'styled-components';

export const StyledNode = styled.div`
  display: flex;
  margin-bottom: 20px;
  .value-wrapper {
    background-color: var(--pink);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: grid;

    place-items: center;
    p {
      color: var(--white);
    }
  }

  .arrow-wrapper {
    margin-left: var(--md);
    margin-right: var(--md);
    i {
      color: var(--light-gray);
      font-weight: 700;
      font-size: 20px;
    }
  }

  .position {
    text-align: center;
  }
`;
