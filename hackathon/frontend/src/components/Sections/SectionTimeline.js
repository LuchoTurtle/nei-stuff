/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import {Line} from "react-chartjs-2";
// reactstrap components
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import bigChartData from "variables/charts.jsx";

// core components

class SectionTimeline extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("landing-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    render() {
        return (
            <>
                <section className="section section-lg">
                    <Col md="12">
                        <Card className="card-chart card-plain">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <hr className="line-info" />
                                        <h5 className="card-category" style={{textTransform: "lowercase"}}>O que tens de fazer</h5>
                                        <CardTitle tag="h2">para te juntares</CardTitle>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={bigChartData.data}
                                        options={bigChartData.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </section>
            </>
        );
    }
}

export default SectionTimeline;
