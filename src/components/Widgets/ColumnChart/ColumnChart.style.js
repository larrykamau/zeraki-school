import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media max-width : 990px {
    flex-direction: column;
  }
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  lineheight: 1.2;
  color: black;
`;

export const Color = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media max-width : 767px {
    margin-top: 20px;
  } ;
`;

export const LabelText = styled.span`
  line-height: 1.2;
  color: black;
  margin-top: 10px;
`;

export const SeriesText = styled.span`
  line-height: 1.2;
  color: #2a265f;
`;
