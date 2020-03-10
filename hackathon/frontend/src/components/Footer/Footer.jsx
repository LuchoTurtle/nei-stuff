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
import {Button, Col, Container, Row, UncontrolledTooltip} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="12"
                 style={{display: "flex",
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center"}}
            >
              <h5>organizado por</h5>
              <h1>NEI-ISEP</h1>
              <div className="btn-wrapper profile">
                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://www.instagram.com/nei_isep/"
                    id="tooltipinstagram"
                    target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipinstagram">
                  Segue-nos
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://twitter.com/nei_isep"
                    id="tooltiptwitter"
                    target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltiptwitter">
                  Segue-nos
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://www.facebook.com/nei.isep"
                    id="tooltipfacebook"
                    target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipfacebook">
                  Dá like na nossa página
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://www.youtube.com/channel/UCPFWp4B34GoqxMaPbS7Xsjg"
                    id="tooltipyoutube"
                    target="_blank"
                >
                  <i className="fab fa-youtube" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipyoutube">
                  Subscreve ao nosso canal
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://www.linkedin.com/company/nei-isep/"
                    id="tooltiplinkedin"
                    target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltiplinkedin">
                  Conecta-te
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="mailto:info@nei-isep.org"
                    id="tooltipemail"
                    target="_blank"
                >
                  <i className="fas fa-envelope" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipemail">
                  Manda-nos um e-mail
                </UncontrolledTooltip>

                <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://www.nei-isep.org/"
                    id="tooltipwebsite"
                    target="_blank"
                >
                  <i className="fas fa-home" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltipwebsite">
                  O nosso site :)
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
