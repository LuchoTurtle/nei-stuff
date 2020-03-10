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
import {Col, Container, Progress, Row} from "reactstrap";

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
                <section className="section section-lg section-safe">
                    <Container style={{marginTop: "0%"}}>
                        <Row className="row-grid justify-content-between">
                            <Col md="6">
                                <div className="px-md-5">
                                    <hr className="line-success" />
                                    <h3>O que fazer para participar</h3>
                                    <p>
                                        Fala com os teus amigos e junta uma equipa com um mínimo de
                                        duas pessoas. Esta aventura não é para ires sozinho portanto
                                        assegura-te que trazes companhia.
                                    </p>
                                    <p>
                                        Depois de juntares a tua equipa, regista-te (e os teus colegas
                                        também) e cria uma equipa após te registares. Depois é só compareceres!
                                    </p>
                                    <ul className="list-unstyled mt-5">
                                        <li className="py-2">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-success mb-2">
                                                    <i className="tim-icons icon-alert-circle-exc" />
                                                </div>
                                                <div className="ml-3">
                                                    <h6>Comparece no evento! Se registares e não apareceres, estás a tirar o lugar a outra equipa.</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6" style={{margin: "auto"}}>
                                <div className="progress-container">
                                    <span className="progress-badge">Combina com os teus amigos</span>
                                    <Progress max="100" value="25">
                                    </Progress>
                                </div>
                                <div className="progress-container">
                                    <span className="progress-badge">Regista-te</span>
                                    <Progress max="100" value="50">
                                    </Progress>
                                </div>
                                <div className="progress-container">
                                    <span className="progress-badge">Cria ou junta-te a uma equipa</span>
                                    <Progress max="100" value="75">
                                    </Progress>
                                </div>
                                <div className="progress-container progress-success">
                                    <span className="progress-badge">Comparece no evento!</span>
                                    <Progress max="100" value="100">
                                    </Progress>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default SectionTimeline;
