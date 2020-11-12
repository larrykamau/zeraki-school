import styled from "styled-components";
import { device } from "utils/device";

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: row;
  position: relative;
  margin: 20px;

  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 40%;
  } ;
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 0 1rem;
`;
export const Title = styled.div`
  padding: 1rem;
  text-align: right;
  color: #2a265f;
  font-weight: bold;
  font-size: 12px;
`;
export const Desc = styled.div`
  padding: 0.5rem 1rem;
  font-size: 12px;
`;
export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
`;
export const SVG = styled.div`
  width: 85px;
  height: 85px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  top: 15px;
  left: 85px;
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const TitleB = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
`;

export const Path = styled.div`
  fill: white;
`;

export const ImgPortada = styled.div`
  width: 100%;
`;

export const Portada = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-image: linear-gradient(-60deg, #2a265f 0%, #2a265f 100%);
  background-position: bottom center;
  background-size: cover;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #8bc34a;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: #4caf50;
    transform: rotate(22deg);
  }
`;
