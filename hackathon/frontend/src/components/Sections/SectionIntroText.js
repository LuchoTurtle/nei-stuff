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
// reactstrap components
import {Col, Container, Row} from "reactstrap";

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
                                por estudantes, para estudantes. E nada melhor que acabar com uma hackathon e com um evento
                                ainda maior. Estás interessado? Confere!
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SectionIntroText;
