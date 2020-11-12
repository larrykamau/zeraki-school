import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #ffffff;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #ffffff;

  @media max-width: 990px {
    padding: 20px;
  } ;
`;

export const Heading = styled.h2`
  color: black;
  margin: 0;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
