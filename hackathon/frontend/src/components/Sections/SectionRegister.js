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
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
    Modal,
    ModalHeader,
    ModalBody
} from "reactstrap";

// core components

class SectionRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares1to6: "",
            squares7and8: "",

            passwordSame: null,
            usernameEmpty: null,
            emailEmpty: null,
            agreedError: "",

            password: "",
            repeatPassword: "",
            email: "",
            username: "",
            agreedWithTerms: false,

            modalLarge: false
        };

        this.toggleModalLarge = this.toggleModalLarge.bind(this);
    }

    componentDidMount() {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", this.followCursor);
    }

    componentWillUnmount() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener(
            "mousemove",
            this.followCursor
        );
    }

    followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
            squares1to6:
                "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)",
            squares7and8:
                "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)"
        });
    };

    passwordCheck() {
        this.setState({passwordSame: this.state.password === this.state.repeatPassword && this.state.password !== ""})
    }

    toggleModalLarge() {
        this.setState({
            modalLarge: !this.state.modalLarge
        });
    }

    submit = () => {
        const email = this.state.email;
        const username = this.state.username;
        const termsAgreed = this.state.agreedWithTerms;
        const passwordSame = this.state.passwordSame;

        this.setState({error: ""});

        if (email === "" || username === "" || !passwordSame) {
            this.setState({emailEmpty: email === "", usernameEmpty: username === "", passwordSame: false});
            return
        }

        if (!termsAgreed) {
            this.setState({error: "Tens de aceitar os termos e condições para te registares."})
            return
        }

        //TODO call backend
    };

    render() {
        return (
            <div id="register-section">
                <div className="wrapper">
                    <div className="page-header">
                        <div className="page-header-image"/>
                        <div className="content">
                            <Container style={{paddingTop: "0px"}}>
                                <Row>
                                    <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                                        <div
                                            className="square square-7"
                                            id="square7"
                                            style={{transform: this.state.squares7and8}}
                                        />
                                        <div
                                            className="square square-8"
                                            id="square8"
                                            style={{transform: this.state.squares7and8}}
                                        />
                                        <Card className="card-register">
                                            <CardHeader>
                                                <CardImg
                                                    alt="..."
                                                    src={require("assets/img/square-purple-1.png")}
                                                />
                                                <CardTitle tag="h4" style={{color: "white"}}>Registo</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Form className="form">
                                                    <InputGroup
                                                        className={classnames({
                                                                "input-group-focus": this.state.fullNameFocus
                                                            },
                                                            {"has-danger": this.state.usernameEmpty === true}
                                                        )}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-single-02"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Username"
                                                            type="text"
                                                            onFocus={e =>
                                                                this.setState({fullNameFocus: true})
                                                            }
                                                            onBlur={e =>
                                                                this.setState({fullNameFocus: false})
                                                            }
                                                            onChange={e => this.setState({
                                                                username: e.target.value,
                                                                usernameEmpty: null
                                                            })}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                                "input-group-focus": this.state.emailFocus
                                                            },
                                                            {"has-danger": this.state.emailEmpty === true})}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-email-85"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Email"
                                                            type="text"
                                                            onFocus={e => this.setState({emailFocus: true})}
                                                            onBlur={e => this.setState({emailFocus: false})}
                                                            onChange={e => this.setState({
                                                                email: e.target.value,
                                                                emailEmpty: null
                                                            })}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                                "input-group-focus": this.state.passwordFocus
                                                            },
                                                            {"has-danger": this.state.passwordSame === false})}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-lock-circle"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Password"
                                                            type="password"
                                                            onFocus={e =>
                                                                this.setState({passwordFocus: true})
                                                            }
                                                            onBlur={e =>
                                                                this.setState({passwordFocus: false})
                                                            }
                                                            onChange={async e => {
                                                                await this.setState({password: e.target.value});
                                                                this.passwordCheck();

                                                            }}
                                                        />
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={classnames({
                                                                "input-group-focus": this.state.repeatPasswordFocus
                                                            },
                                                            {"has-danger": this.state.passwordSame === false})}
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="tim-icons icon-lock-circle"/>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Repetir password"
                                                            type="password"
                                                            onFocus={e =>
                                                                this.setState({repeatPasswordFocus: true})
                                                            }
                                                            onBlur={e =>
                                                                this.setState({repeatPasswordFocus: false})
                                                            }
                                                            onChange={async e => {
                                                                await this.setState({repeatPassword: e.target.value});
                                                                this.passwordCheck();
                                                            }}

                                                        />
                                                    </InputGroup>
                                                    <FormGroup check className="text-left">
                                                        <Label check>
                                                            <Input type="checkbox"
                                                                   onChange={e => this.setState({agreedWithTerms: e.target.checked})}
                                                            />
                                                            <span className="form-check-sign"/>Eu concordo com{" "}
                                                            <a
                                                                href="#pablo"
                                                                onClick={e => {
                                                                    e.preventDefault()
                                                                    this.toggleModalLarge()
                                                                }}
                                                            >
                                                                termos e condições
                                                            </a>
                                                            .

                                                            <p style={{color: "red"}}>{this.state.error}</p>
                                                        </Label>
                                                    </FormGroup>
                                                </Form>
                                            </CardBody>
                                            <CardFooter style={{textAlign: "center"}}>
                                                <Button className="btn-round" color="primary" size="lg"
                                                        onClick={this.submit}>
                                                    Registar
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                                <div className="register-bg"/>
                                <div
                                    className="square square-1"
                                    id="square1"
                                    style={{transform: this.state.squares1to6}}
                                />
                                <div
                                    className="square square-2"
                                    id="square2"
                                    style={{transform: this.state.squares1to6}}
                                />
                                <div
                                    className="square square-4"
                                    id="square4"
                                    style={{transform: this.state.squares1to6}}
                                />
                                <div
                                    className="square square-5"
                                    id="square5"
                                    style={{transform: this.state.squares1to6}}
                                />
                                <div
                                    className="square square-6"
                                    id="square6"
                                    style={{transform: this.state.squares1to6}}
                                />
                            </Container>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modalLarge} toggle={this.toggleModalLarge} size="lg">
                    <ModalHeader className="justify-content-center" toggle={this.toggleModalLarge}>
                        Política de privacidade
                    </ModalHeader>
                    <ModalBody>
                        <p>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua
                            visita no nosso site o mais produtiva e agradável possível.</p>
                        <p>A garantia da
                        confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o NEI-ISEP. Dados sensíveis não irão ser partilhados
                        e irão ser mantidos com segurança.</p>
                        <p>Todas as informações pessoais relativas aos participantes do Git Overflow Hackathon serão tratadas em concordância com a Lei da Proteção de Dados
                        Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p>
                        <p>A informação pessoal recolhida pode inclui o seu e-mail apenas para notificações do progresso do evento.</p>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SectionRegister;
