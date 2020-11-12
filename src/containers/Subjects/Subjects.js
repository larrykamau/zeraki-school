import React from "react";

import { Grid } from "./Subjects.style";
import Table from "./Table";

export default function Subjects({ alldata }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "SUBJECT SCORES",
        columns: [
          {
            Header: "Subject",
            accessor: "subject_name",
          },
          {
            Header: "Rank",
            accessor: "rank",
          },
          {
            Header: "Out Of",
            accessor: "rank_out_of",
          },
          {
            Header: "Grade",
            accessor: "grade",
          },
          {
            Header: "Score",
            accessor: "score",
          },
          {
            Header: "Comment",
            accessor: "comment",
          },
        ],
      },
    ],
    []
  );

  const data = alldata;

  return (
    <Grid>
      <Table
        columns={columns}
        data={data.subject_results}
        getCellProps={(cellInfo, allCells) => ({
          style: {
            backgroundColor: `hsl(${
              (console.log(allCells),
              cellInfo.column.id === "score"
                ? 120 * ((100 - cellInfo.value) / 100) * -1 + 120
                : null)
            }, 100%, 67%)`,
          },
        })}
      />
    </Grid>
  );
}
