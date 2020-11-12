import React from "react";
import styled from "styled-components";
import { Grid, Row, Col as Column } from "components/FlexBox/FlexBox";
// import RadialBarChart from "components/Widgets/RadialBarChart/RadialBarChart";
// import LineChart from "components/Widgets/LineChart/LineChart";
import ColumnChart from "components/Widgets/ColumnChart/ColumnChart";
// import DonutChart from "components/Widgets/DonutChart/DonutChart";
// import GraphChart from "components/Widgets/GraphChart/GraphChart";
// import GradiantGraphChart from "components/Widgets/GradiantGraphChart/GradiantGraphChart";
// import MapWidget from "components/Widgets/MapWidget/MapWidget";
import StickerCard from "components/Widgets/StickerCard/StickerCard";
import { UserIcon, Members } from "components/AllSvgIcon";

const Col = styled(Column)`
  @media max-width: 574px {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ,

  @media max-width: 990px {
    margin-bottom: 30px;
  }
`;

const TermCharts = ({ alldata }) => {
  const series = alldata.student_performance_over_time.reduce((acc, set) => {
    acc.push(set.avg_score);
    return acc;
  }, []);
  const categories = alldata.student_performance_over_time.reduce(
    (acc, set) => {
      const term = set.exam_name.split(/[()]/)[1].split(" ")[2].trim();
      const cat = set.exam_name.split("CAT")[1].split(" ")[1].trim();
      const category = [`CAT ${cat}`, `Term ${term}`];
      acc.push(category);
      return acc;
    },
    []
  );

  return (
    <Grid fluid={true}>
      {/* <Row>
      <Col md={5} lg={4} sm={6}>
        <RadialBarChart
          widgetTitle="Target"
          series={[43, 75]}
          label={["$1,342", "$8,908"]}
          colors={["#03D3B5", "#666d92"]}
          helperText={["Weekly Targets", "Monthly Targets"]}
        />
      </Col>
      <Col md={7} lg={8} sm={6}>
        <LineChart
          widgetTitle="User Hit Rate"
          color={["#03D3B5"]}
          categories={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
          seriesName="Unique visitors"
          series={[200, 150, 430, 320, 600, 468, 309, 500, 273, 370, 260, 180]}
        />
      </Col>
    </Row>
        */}

      <Row>
        <Col lg={4} sm={6} xs={12} className="mb-30">
          <StickerCard
            title="Overall Position"
            subtitle="(From Last CAT)"
            icon={<Members />}
            position={alldata.overall_position.position}
            out_of={alldata.overall_position.position_out_of}
            indicator="up"
            indicatorText="Deviation ~ "
            note={alldata.overall_position.deviation}
            link="#"
            linkText="Full Details"
          />
        </Col>
        <Col lg={4} sm={6} xs={12} className="mb-30">
          <StickerCard
            title="Stream Position"
            subtitle="(From Last CAT)"
            icon={<Members />}
            position={alldata.stream_position.position}
            out_of={alldata.stream_position.position_out_of}
            indicator="up"
            indicatorText="Deviation ~ "
            note={alldata.stream_position.deviation}
            link="#"
            linkText="Full Details"
          />
        </Col>
        <Col lg={4} sm={6} xs={12} className="mb-30">
          <StickerCard
            title="Mean Marks"
            subtitle="(Current CAT)"
            icon={<UserIcon />}
            position={alldata.mean_marks.avg_score}
            out_of={100}
            indicator="up"
            indicatorText="Deviation ~ "
            note={alldata.mean_marks.deviation}
            link="#"
            linkText="Full Details"
          />
        </Col>
      </Row>
      {/*
    <Row>
      <Col md={7} lg={8}>
        <GraphChart
          widgetTitle="Sales From Social Media"
          colors={["#03D3B5"]}
          series={[25, 30, 14, 30, 55, 60, 48]}
          labels={[
            "2019-05-12",
            "2019-05-13",
            "2019-05-14",
            "2019-05-15",
            "2019-05-16",
            "2019-05-17",
            "2019-05-18",
          ]}
        />
      </Col>

      <Col md={5} lg={4}>
        <DonutChart
          widgetTitle="Target"
          series={[30634, 6340]}
          labels={["Todays Revenue", "Todays Refund"]}
          colors={["#03D3B5", "#666d92"]}
          helperText={["Weekly Targets", "Monthly Targets"]}
          icon={[<Revenue />, <Refund />]}
          prefix="$"
        />
      </Col>
    </Row> */}

      <Row>
        <Col md={12} lg={12}>
          <ColumnChart
            widgetTitle="2019 Performance History"
            colors={["#2a265f"]}
            prefix="Mean Average "
            totalValue="65.2"
            position="up"
            percentage="1.38%"
            text="More than last year"
            series={series}
            categories={categories}
          />
        </Col>
      </Row>
      {/* <Row>
      <Col md={5} lg={4}>
        <GradiantGraphChart
          colors={["#03D3B5"]}
          series={[25, 30, 14, 30, 55, 60, 48]}
          labels={[
            "2019-05-12",
            "2019-05-13",
            "2019-05-14",
            "2019-05-15",
            "2019-05-16",
            "2019-05-17",
            "2019-05-18",
          ]}
          topRowTitle="Performance"
          bottomRowData={[
            {
              label: "Last Week Profit",
              valueText: "+29.7%",
              value: 29.7,
              color: "#03D3B5",
            },
            {
              label: "This Week Losses",
              valueText: "-53.4%",
              value: 53.4,
              color: "#FC747A",
            },
          ]}
        />
      </Col>

      <Col md={7} lg={8}>
        <MapWidget
          data={[
            {
              name: "Williamburgs",
              value: 69922,
              color: "#2170FF",
            },
            {
              name: "Brooklyn",
              value: 41953,
              color: "#29CAE4",
            },
            {
              name: "New York",
              value: 23307,
              color: "#666D92",
            },
            {
              name: "Jersey City",
              value: 20200,
              color: "#03D3B5",
            },
          ]}
          totalText="Total Client"
        />
      </Col>
    </Row>
   */}
    </Grid>
  );
};

export default TermCharts;
