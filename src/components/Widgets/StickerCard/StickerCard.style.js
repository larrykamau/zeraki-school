import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const TopInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
`;

export const SubTitle = styled.span`
  line-height: 1.2;
  color: #666d92;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0px;
`;

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Position = styled.span`
  line-height: 1.2;
  color: black;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 21px;
`;

export const Text = styled.span`
  line-height: 1.2;
  margin-bottom: 30px;
`;

export const Note = styled.span`
  color: #666d92;
  line-height: 1.2;
  font-weight: 400;
  font-size: 14px;
`;

export const Link = styled.a`
  color: blue;
  line-height: 1.2;
  text-decoration: none;
`;
