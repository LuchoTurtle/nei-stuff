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
import * as Scroll from 'react-scroll';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
var scroller = Scroll.scroller;

class SectionIntroText extends React.Component {
    render() {
        return (
            <div
                className="section section-download"
                data-background-color="black"
                id="download-section"
            >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className="text-center" lg="8" md="12">
                            <h2 className="title">
                                A primeira hackathon no ISEP está aqui. E daqui não irá sair!
                            </h2>
                            <h4 className="description">
                                Depois do sucesso da Game Jam deste ano, o NEI quer acabar o ano com mais um evento feito
                                de estudantes, para estudantes. E nada melhor que acabar com uma hackathon e com um evento
                                ainda maior. Estás interessado? Confere!
                            </h4>
                        </Col>
                        <Col className="text-center" lg="8" md="12">
                            <Button
                                id="go_to_register"
                                className="btn-round"
                                color="info"
                                role="button"
                                size="lg"
                                onClick={ () => {
                                    scroller.scrollTo('section_register_scroll', {
                                        duration: 1500,
                                        delay: 100,
                                        smooth: true,
                                        offset: 50, // Scrolls to element + 50 pixels down the page
                                    })
                                }}
                            >
                               Ir para registo
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SectionIntroText;
