import styled from "styled-components";
import { device } from "utils/device";

export const Course = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 20px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 60%;
  }
  @media ${device.desktop} {
    width: 60%;
  } ;
`;

export const H6 = styled.h6`
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const H2 = styled.h2`
  letter-spacing: 1px;
  margin: 10px 0;
`;

export const Preview = styled.div`
  background-color: #2a265f;
  color: #fff;
  padding: 30px;
  max-width: 250px;
`;

export const P = styled.p`
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
`;

export const PInfo = styled.div`
  padding: 30px;
  position: relative;
  width: 100%;
`;

export const ProgressContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 150px;
`;

export const Progress = styled.div`
  background-color: #ddd;
  border-radius: 3px;
  height: 5px;
  width: 100%;
  &:after {
    border-radius: 3px;
    background-color: #2a265f;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    ${({ width }) =>
      width &&
      `
            width: ${width}%;
        `}
  }
`;

export const PText = styled.span`
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  background-color: #2a265f;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
`;
