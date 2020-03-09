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
import {Container} from "reactstrap";
import Typing from 'react-typing-animation';
import Particles from "react-particles-js";

import "../../styles/glitch.scss"

class PageHeader extends React.Component {
    render() {
        return (
            <div className="page-header header-filter">
                {
                    /*
                    <div className="squares square1" />
                    <div className="squares square2" />
                    <div className="squares square3" />
                    <div className="squares square4" />
                    <div className="squares square5" />
                    <div className="squares square6" />
                    <div className="squares square7" />
                     */
                }
                <Container>
                    <Particles
                        height={"100vh"}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50
                                },
                                "size": {
                                    "value": 3
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            }
                        }}/>
                    <div className="content-center brand">
                        <h1 className="glitch" data-text="Git Overflow">Git Overflow</h1>
                        <Typing speed={5}>
                            <h3 style={{textTransform: "lowercase"}}>
                                A maior <span style={{color: "#00aeef"}}>hackathon</span> do ISEP chegou para ficar.
                            </h3>
                        </Typing>
                    </div>
                </Container>
            </div>
        );
    }
}

export default PageHeader;
