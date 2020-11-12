import React from "react";
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  SubTitle,
  IconBox,
  Position,
  Note,
  Text,
  Link,
} from "./StickerCard.style";
import { IosArrowUp, IosArrowDown } from "components/AllSvgIcon";

const StickerCard = ({
  title,
  subtitle,
  icon,
  position,
  out_of,
  indicator,
  indicatorText,
  note,
  link,
  linkText,
}) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleWrapper>

        <IconBox>{icon}</IconBox>
      </TopInfo>

      <Position>
        {position} / {out_of}
      </Position>
      {indicator !== "" ? (
        indicator === "up" ? (
          <Text style={{ color: "#03D3B5" }}>
            <IosArrowUp width="9px" height="11px" /> {indicatorText}
            <Note> {note}</Note>
          </Text>
        ) : indicator === "down" ? (
          <Text style={{ color: "#FC6687" }}>
            <IosArrowDown width="9px" height="11px" /> {indicatorText}
            <Note> {note}</Note>
          </Text>
        ) : (
          ""
        )
      ) : (
        ""
      )}
      {link !== "" && (
        <Link href={link} target="_blank">
          {linkText}
        </Link>
      )}
    </Card>
  );
};

export default StickerCard;
