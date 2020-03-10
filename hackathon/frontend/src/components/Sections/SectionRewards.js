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
import { Line } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

import bigChartData from "variables/charts.jsx";

class SectionRewards extends React.Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <section className="section section-lg section-coins">
                        <img
                            alt="..."
                            className="path"
                            src={require("assets/img/path3.png")}
                        />
                        <Container>
                            <Row>
                                <Col md="4">
                                    <hr className="line-info" />
                                    <h1>
                                        Os prémios{" "}
                                        <span className="text-info">para os vencedores</span>
                                    </h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/bitcoin.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Útil</h4>
                                                    <hr className="line-primary" />
                                                </Col>
                                            </Row>
                                            <Row style={{display: "flex", justifyContent: "center"}}>
                                                <ListGroup>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/etherum.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Engraçado</h4>
                                                    <hr className="line-success" />
                                                </Col>
                                            </Row>
                                            <Row style={{display: "flex", justifyContent: "center"}}>
                                                <ListGroup>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card className="card-coin card-plain">
                                        <CardHeader>
                                            <img
                                                alt="..."
                                                className="img-center img-fluid"
                                                src={require("assets/img/ripp.png")}
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Row>
                                                <Col className="text-center" md="12">
                                                    <h4 className="text-uppercase">Hardcore</h4>
                                                    <hr className="line-info" />
                                                </Col>
                                            </Row>
                                            <Row style={{display: "flex", justifyContent: "center"}}>
                                                <ListGroup>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                    <ListGroupItem>Uma cena</ListGroupItem>
                                                </ListGroup>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </>
        );
    }
}

export default SectionRewards;
