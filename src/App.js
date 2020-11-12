import React, { Suspense } from "react";
import Layout from "containers/Layout/Layout";
import Info from "./components/Info/Info";
import { Profile } from "./components/Profile/Profile";
import alldata from "./data.json";

import { InLineLoader } from "components/InlineLoader/InlineLoader";
import Subjects from "containers/Subjects/Subjects";
import { useDeviceType } from "utils/useDeviceType";
import TermCharts from "containers/TermCharts/TermCharts";
import { Header, Heading } from "components/WrapperStyle";
import { Grid, Row as Rows, Col as Column } from "components/FlexBox/FlexBox";
import styled from "styled-components";

const Row = styled(Rows)`
  @media min-width: 768px: {
    align-items: center;
  } ;
`;
const Col = styled(Column)`
  @media max-width: 767px {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0,
    };
  }:`;

function App() {
  const data = alldata;
  const year = data.exam_name.split(/[()]/)[1].split(" ")[0].trim();
  const term = data.exam_name.split(/[()]/)[1].split(" ")[2].trim();
  const cls = data.exam_name.split(/-/)[0].trim();
  const cat = data.exam_name.split("CAT")[1].split(" ")[1].trim();
  const userAgent = navigator.userAgent;
  const devicetype = useDeviceType(userAgent);
  const { desktop } = devicetype;

  return (
    <Layout>
      <Suspense fallback={<InLineLoader />}>
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
              <Header
                style={{
                  marginTop: 20,
                  boxShadow: "0 0 5px rgba(0, 0 ,0, 0.05)",
                  borderRadius: "20px 20px 0px 0px",
                }}
              >
                <Heading>
                  Zeraki Student Report <span>(Most Recent)</span>
                </Heading>
              </Header>
            </Col>
          </Row>
        </Grid>
        <div
          style={
            desktop
              ? {
                  display: "flex",
                  flex: "0 1 auto",
                  flexDirection: "row",
                }
              : {
                  display: "block",
                }
          }
        >
          <Profile devicetype={devicetype} data={data} cls={cls} />
          <Info
            devicetype={devicetype}
            data={data}
            year={year}
            term={term}
            cat={cat}
          />
        </div>
        <div style={{ display: "block", width: "100%" }}>
          <Subjects alldata={data} devicetype={devicetype} />
          <TermCharts alldata={data} devicetype={devicetype} />
        </div>
      </Suspense>
    </Layout>
  );
}

export default App;
