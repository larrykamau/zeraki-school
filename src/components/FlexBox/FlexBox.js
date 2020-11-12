import styled from "styled-components";
import { Grid as Grids, Row as Rows, Col as Cols } from "react-flexbox-grid";

export const Grid = styled(Grids)``;

export const Row = styled(Rows)`
  margin: 0 -15px 30px;

  &:last-child {
    margin-bottom: 0px,
  },
`;

export const Col = styled(Cols)`
  padding: 20px;
`;
