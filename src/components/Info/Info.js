import React from "react";
import {
  P,
  PText,
  Course,
  H6,
  H2,
  PInfo,
  Progress,
  ProgressContainer,
  Button,
  Preview,
} from "./Info.style";

const Info = ({ devicetype, data, year, term, cat }) => {
  const { desktop } = devicetype;
  return (
    <Course>
      <Preview>
        <H6>{year}</H6>
        <H2>Term {term}</H2>
        <H2>CAT {cat}</H2>
        <P>View all terms in {year} &gt; </P>
      </Preview>
      <PInfo>
        {desktop ? (
          <ProgressContainer>
            <Progress
              width={(Object.keys(data.subject_results).length * 100) / 12}
            />
            <PText>
              {Object.keys(data.subject_results).length}/12 Subjects
            </PText>{" "}
          </ProgressContainer>
        ) : null}

        <H6>
          MEAN GRADE: {data.mean_grade}
          {desktop ? `MEAN MARKS:` : `,`} {data.mean_marks.avg_score}
        </H6>
        <H2>Remarks & Comments</H2>
        <p>
          <strong>Class Teacher: </strong>
          {data.class_teachers_remarks}
        </p>
        <p>
          <strong>Principal: </strong>
          {data.principals_remarks}
        </p>
        {desktop ? <Button>Print Report</Button> : null}
      </PInfo>
    </Course>
  );
};
export default Info;
