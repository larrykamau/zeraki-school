import styled from "styled-components";

export const TitleWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-betwween;
`;

export const BoxHeading = styled.h3`
  color: #ddd;
  line-height: 1.3;
  margin: 0;

  @media max-width: 767px {
    display: block;
  } ;
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 21px 36px rgba(0, 0, 0, 0.03);
  overflow: hidden;
`;

export const BoxContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default BoxWrapper;
