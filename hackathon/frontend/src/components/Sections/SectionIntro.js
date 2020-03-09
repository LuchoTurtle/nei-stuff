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

class SectionIntro extends React.Component {
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
                        <section className="section">
                            <img
                                alt="..."
                                className="path"
                                src={require("assets/img/path4.png")}
                            />
                            <Container>
                                <Row className="row-grid justify-content-between">
                                    <Col className="mt-lg-5" md="5">
                                        <Row>
                                            <Col className="px-2 py-2" lg="6" sm="12">
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-controller text-warning" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">Jogos</CardTitle>
                                                                    <p />
                                                                    <p className="card-category" style={{textTransform: "lowercase"}}>para descontraíres</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col className="px-2 py-2" lg="6" sm="12">
                                                <Card className="card-stats upper bg-default">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-time-alarm text-white" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">32 horas</CardTitle>
                                                                    <p />
                                                                    <p className="card-category" style={{textTransform: "lowercase"}}>onde aprendes e te divertes</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="px-2 py-2" lg="6" sm="12">
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-gift-2 text-info" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">Prémios</CardTitle>
                                                                    <p />
                                                                    <p className="card-category" style={{textTransform: "lowercase"}}>para os vencedores</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col className="px-2 py-2" lg="6" sm="12">
                                                <Card className="card-stats">
                                                    <CardBody>
                                                        <Row>
                                                            <Col md="4" xs="5">
                                                                <div className="icon-big text-center icon-warning">
                                                                    <i className="tim-icons icon-bag-16 text-success" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8" xs="7">
                                                                <div className="numbers">
                                                                    <CardTitle tag="p">Comida</CardTitle>
                                                                    <p />
                                                                    <p className="card-category" style={{textTransform: "lowercase"}}>por nossa conta</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="6">
                                        <div className="pl-md-5">
                                            <h1>
                                                O <strong>evento</strong>
                                            </h1>
                                            <p>
                                                Pela primeira vez no ISEP, o NEI está-se a preparar para criar o seu maior evento
                                                até à data. Bem-vindo ao <b>Git Overflow Hackathon</b>. Nesta edição inaugural irás
                                                poder desenvolver aplicações num espaço de 38 horas contínuas, repletas de atividades.
                                            </p>
                                            <br />
                                            <p>
                                                Como é habitual nos eventos do NEI, existem prémios para vencedores e comida para
                                                poderes restaurar as tuas energias. Não te preocupes, está tudo por nossa conta.
                                                Só tens de aparecer!
                                            </p>
                                            <br />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </section>
            </>
        );
    }
}

export default SectionIntro;
