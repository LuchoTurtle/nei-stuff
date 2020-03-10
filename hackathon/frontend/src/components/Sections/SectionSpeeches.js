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
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

const carouselItems = [
    {
        src: require("assets/img/denys.jpg"),
        altText: "Slide 1",
        caption: "Big City Life, United States"
    },
    {
        src: require("assets/img/fabien-bazanegue.jpg"),
        altText: "Slide 2",
        caption: "Somewhere Beyond, United States"
    },
    {
        src: require("assets/img/mark-finn.jpg"),
        altText: "Slide 3",
        caption: "Stocks, United States"
    }
];

let ps = null;

class SectionSpeeches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsSpeaker1: 1,
            tabsSpeaker2: 1,
            tabsSpeaker3: 1,
        };
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            let tables = document.querySelectorAll(".table-responsive");
            for (let i = 0; i < tables.length; i++) {
                ps = new PerfectScrollbar(tables[i]);
            }
        }
        document.body.classList.toggle("profile-page");
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.documentElement.className += " perfect-scrollbar-off";
            document.documentElement.classList.remove("perfect-scrollbar-on");
        }
        document.body.classList.toggle("profile-page");
    }

    toggleTabs = (e, stateName, index) => {
        e.preventDefault();
        this.setState({
            [stateName]: index
        });
    };

    firstSpeaker = () => {
        return (
            <section className="section section-lg section-download">
                <div className="wrapper">
                    <h1 className="title">Palestras</h1>
                    <h4 className="text-center" style={{marginRight: "20%", marginLeft: "20%"}}>
                        O <b>Git Overflow Hackathon</b> conta com palestras de
                        vários <i>speakers </i> de várias empresas inseridas no paradigma IT e cada uma com uma tema diferente.
                        Mais novidades irão ser anunciadas brevemente!
                    </h4>
                    <div className="page-header" style={{height: "100%"}}>
                        <div className="blurred">
                            <Container id="speaker1" className="align-items-center">
                                <Row>
                                    <Col lg="6" md="6">
                                        <h1 className="profile-title text-left">Machine Learning</h1>
                                        <h5 className="text-on-back">01</h5>
                                        <p className="profile-description speaker-text">
                                            Nesta palestra irão ser abordadas vários temas relacionados
                                            com inteligência artificial e machine learning. Desde aprendizagem
                                            supervisionada até redes neuronais, tudo sobre esta matéria irá ser
                                            lecionada.
                                        </p>
                                    </Col>
                                    <Col className="ml-auto mr-auto" lg="4" md="6">
                                        <Card className="card-coin card-plain">
                                            <CardHeader>
                                                <img
                                                    alt="..."
                                                    className="img-center img-fluid rounded-circle"
                                                    src={require("assets/img/mike.jpg")}
                                                />
                                                <h4 className="title">Hands-on Machine Learning Workshop</h4>
                                            </CardHeader>
                                            <CardBody>
                                                <Nav
                                                    className="nav-tabs-primary justify-content-center"
                                                    tabs
                                                >
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker1 === 1
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker1", 1)}
                                                            href="#pablo"
                                                        >
                                                            Sobre
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker1 === 2
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker1", 2)}
                                                            href="#pablo"
                                                        >
                                                            Speaker
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent
                                                    className="tab-subcategories"
                                                    activeTab={"tab" + this.state.tabsSpeaker1}
                                                >
                                                    <TabPane tabId="tab1">
                                                        <Table className="tablesorter" responsive>
                                                            <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">Dia</th>
                                                                <th className="header">Hora</th>
                                                                <th className="header">Sala</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>27/03</td>
                                                                <td>16:30</td>
                                                                <td>B307</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                    </TabPane>
                                                    <TabPane tabId="tab2">
                                                        <h3 className="text-center">Susana Tavares</h3>
                                                        <h5 className="text-center">Susana Tavares trabalha na BLIP há
                                                            dois anos e tem uma enorme experiência em machine
                                                            learning.</h5>
                                                    </TabPane>
                                                </TabContent>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    secondSpeaker = () => {
        return (
            <section className="section section-lg section-download">
                <div className="wrapper">
                        <div className="blurred">
                            <Container id="speaker1" className="align-items-center">
                                <Row>
                                    <Col lg="6" md="6">
                                        <h1 className="profile-title text-left">Machine Learning</h1>
                                        <h5 className="text-on-back">01</h5>
                                        <p className="profile-description speaker-text">
                                            Nesta palestra irão ser abordadas vários temas relacionados
                                            com inteligência artificial e machine learning. Desde aprendizagem
                                            supervisionada até redes neuronais, tudo sobre esta matéria irá ser
                                            lecionada.
                                        </p>
                                    </Col>
                                    <Col className="ml-auto mr-auto" lg="4" md="6">
                                        <Card className="card-coin card-plain">
                                            <CardHeader>
                                                <img
                                                    alt="..."
                                                    className="img-center img-fluid rounded-circle"
                                                    src={require("assets/img/mike.jpg")}
                                                />
                                                <h4 className="title">Hands-on Machine Learning Workshop</h4>
                                            </CardHeader>
                                            <CardBody>
                                                <Nav
                                                    className="nav-tabs-primary justify-content-center"
                                                    tabs
                                                >
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker2 === 1
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker2", 1)}
                                                            href="#pablo"
                                                        >
                                                            Sobre
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker2 === 2
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker2", 2)}
                                                            href="#pablo"
                                                        >
                                                            Speaker
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent
                                                    className="tab-subcategories"
                                                    activeTab={"tab" + this.state.tabsSpeaker2}
                                                >
                                                    <TabPane tabId="tab1">
                                                        <Table className="tablesorter" responsive>
                                                            <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">Dia</th>
                                                                <th className="header">Hora</th>
                                                                <th className="header">Sala</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>27/03</td>
                                                                <td>16:30</td>
                                                                <td>B307</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                    </TabPane>
                                                    <TabPane tabId="tab2">
                                                        <h3 className="text-center">Susana Tavares</h3>
                                                        <h5 className="text-center">Susana Tavares trabalha na BLIP há
                                                            dois anos e tem uma enorme experiência em machine
                                                            learning.</h5>
                                                    </TabPane>
                                                </TabContent>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                </div>
            </section>
        );
    }

    thirdSpeaker = () => {
        return (
            <section className="section section-lg section-download">
                <div className="wrapper">
                        <div className="blurred">
                            <Container id="speaker1" className="align-items-center">
                                <Row>
                                    <Col lg="6" md="6">
                                        <h1 className="profile-title text-left">Machine Learning</h1>
                                        <h5 className="text-on-back">01</h5>
                                        <p className="profile-description speaker-text">
                                            Nesta palestra irão ser abordadas vários temas relacionados
                                            com inteligência artificial e machine learning. Desde aprendizagem
                                            supervisionada até redes neuronais, tudo sobre esta matéria irá ser
                                            lecionada.
                                        </p>
                                    </Col>
                                    <Col className="ml-auto mr-auto" lg="4" md="6">
                                        <Card className="card-coin card-plain">
                                            <CardHeader>
                                                <img
                                                    alt="..."
                                                    className="img-center img-fluid rounded-circle"
                                                    src={require("assets/img/mike.jpg")}
                                                />
                                                <h4 className="title">Hands-on Machine Learning Workshop</h4>
                                            </CardHeader>
                                            <CardBody>
                                                <Nav
                                                    className="nav-tabs-primary justify-content-center"
                                                    tabs
                                                >
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker3 === 1
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker3", 1)}
                                                            href="#pablo"
                                                        >
                                                            Sobre
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.tabsSpeaker3 === 2
                                                            })}
                                                            onClick={e => this.toggleTabs(e, "tabsSpeaker3", 2)}
                                                            href="#pablo"
                                                        >
                                                            Speaker
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent
                                                    className="tab-subcategories"
                                                    activeTab={"tab" + this.state.tabsSpeaker3}
                                                >
                                                    <TabPane tabId="tab1">
                                                        <Table className="tablesorter" responsive>
                                                            <thead className="text-primary">
                                                            <tr>
                                                                <th className="header">Dia</th>
                                                                <th className="header">Hora</th>
                                                                <th className="header">Sala</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>27/03</td>
                                                                <td>16:30</td>
                                                                <td>B307</td>
                                                            </tr>
                                                            </tbody>
                                                        </Table>
                                                    </TabPane>
                                                    <TabPane tabId="tab2">
                                                        <h3 className="text-center">Susana Tavares</h3>
                                                        <h5 className="text-center">Susana Tavares trabalha na BLIP há
                                                            dois anos e tem uma enorme experiência em machine
                                                            learning.</h5>
                                                    </TabPane>
                                                </TabContent>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                </div>
            </section>
        );
    }

    render() {
        return (
            <>
                {this.firstSpeaker()}
                {this.secondSpeaker()}
                {this.thirdSpeaker()}
            </>
        );
    }
}

export default SectionSpeeches;
