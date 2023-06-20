import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    list-style: none;
  }

  a {
    font-size: 16px;
    color: #0d0d0d;

    padding: 14px 20px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    cursor: pointer;
    position: relative;
    display: flex;
    text-decoration: none;

    ::before {
      content: ' ';
      width: 0.8rem;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background: #ff5824;
      border-radius: 0.4rem 0px 0px 0.4rem;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
`;
