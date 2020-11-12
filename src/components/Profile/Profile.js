import React from "react";
import {
  Card,
  H2,
  Title,
  TitleB,
  Desc,
  Text,
  Portada,
  Avatar,
} from "./Profile.style";

export const Profile = ({ data, cls }) => {
  if (!data) {
    return (
      <div>
        <p>Nothing to display</p>
      </div>
    );
  } else {
    return (
      <Card>
        <Avatar
          src={data.student_photo ? data.student_photo : null}
          alt="img"
        />
        <Text>
          <Portada></Portada>
          <TitleB>
            <Title>
              {cls ? cls : null} :{" "}
              <strong> {data.class_name ? data.class_name : null}</strong>
            </Title>
            <H2>{data.student_name ? data.student_name : null}</H2>

            <Desc></Desc>
            <Title>
              Admission Number :{" "}
              {data.student_admission_number
                ? data.student_admission_number
                : null}
            </Title>
          </TitleB>
        </Text>
      </Card>
    );
  }
};
