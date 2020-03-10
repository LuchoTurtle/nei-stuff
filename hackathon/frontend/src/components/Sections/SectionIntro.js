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
// reactstrap components
import {Card, CardBody, CardTitle, Col, Container, Row} from "reactstrap";

// core components

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
                                    <Col id="section_intro" md="6">
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
                                </Row>
                            </Container>
                        </section>
                    </section>
                <section className="section section-lg">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                <h1 className="text-center">TRÊS TEMAS</h1>
                                <h4 className="text-center">Podes tentar a sorte num dos três temas nesta hackathon! Cada tema tem um conjunto de prémios
                                associados portanto assegura-te que se enquadra!
                                </h4>
                                <Row className="row-grid justify-content-center">
                                    <Col lg="3">
                                        <div className="info">
                                            <div className="icon icon-primary">
                                                <i className="tim-icons icon-money-coins" />
                                            </div>
                                            <h4 className="info-title">Útil</h4>
                                            <hr className="line-primary" />
                                            <p>
                                                Neste tema estamos à procura de aplicações úteis. Uma aplicação
                                                que seja útil pode ser aplicada a qualquer ramo, desde a soluções
                                                de dia-a-dia até utilidade no desenvolvimento de software.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div className="info">
                                            <div className="icon icon-warning">
                                                <i className="tim-icons icon-chart-pie-36" />
                                            </div>
                                            <h4 className="info-title">Engraçado</h4>
                                            <hr className="line-warning" />
                                            <p>
                                                Projetos que fazem as pessoas geralmente rir. Qualquer coisa
                                                absurda que gera riso da plateia é adequado aqui portanto
                                                põe a tua creatividade e humor à prova!
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div className="info">
                                            <div className="icon icon-success">
                                                <i className="tim-icons icon-single-02" />
                                            </div>
                                            <h4 className="info-title">Hardcore</h4>
                                            <hr className="line-success" />
                                            <p>
                                                Ideias de projeto que requerem um domínio
                                                técnico alto e que demonstram altos padrões de
                                                engenharia em desenvolvimento de software e de implementação
                                                são adequados para este tema!
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default SectionIntro;
