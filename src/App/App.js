import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAPI } from "../actions/requestActions";
import "./App.css";
import {
  SplitButton,
  Dropdown,
  Form,
  InputGroup,
  Navbar,
  Jumbotron
} from "react-bootstrap";

import Highlight from "react-highlight";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      mode: "json"
    };
  }

  handleAddressChange = e => {
    this.setState({ address: e.target.value });
  };

  handleModeChange = newMode => {
    this.setState({ mode: newMode });
  };

  handleRequest = () => {
    this.setState({ address: this.props.address });
    this.props.fetchAPI(this.state.address, this.state.mode);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.setState({ address: this.props.address });
    }
  }

  render() {
    const { response } = this.props;

    return (
      <div className="main">
        <div>
          <Highlight innerHTML={true}>{"<p>Hello world</p>"}</Highlight>
          <Highlight language="javascript">
            {`function foo() { return 'bar' }`}
          </Highlight>
        </div>

        <Navbar className="top-navbar" bg="dark" variant="dark">
          <Navbar.Brand href="#home">{"Schibsted REST framework"}</Navbar.Brand>
        </Navbar>
        <div className="main-app">
          <div className="header">
            <h1>Advertiser List</h1>
            <div className="small-button">
              <SplitButton
                id="dropdown-basic-button"
                title={this.state.mode.toUpperCase()}
                type="submit"
                onClick={() => this.handleRequest()}
              >
                <Dropdown.Item onClick={() => this.handleModeChange("json")}>
                  JSON
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleModeChange("xml")}>
                  XML
                </Dropdown.Item>
              </SplitButton>
            </div>
          </div>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">GET</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="url"
              name="address"
              placeholder="/advertisers/?format=api"
              required
              onChange={this.handleAddressChange}
              value={this.state.address}
            />
            <Form.Control.Feedback type="invalid">
              Please choose an endpoint.
            </Form.Control.Feedback>
          </InputGroup>

          {!!response && (
            <Jumbotron className="response-output">
              {typeof response === "object" ? (
                <Highlight language="json">
                  {JSON.stringify(response, null, 2)}
                </Highlight>
              ) : (
                <Highlight language="xml">{response}</Highlight>
              )}
            </Jumbotron>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  response: state.responses.response,
  address: state.responses.address
});

const mapDispatchToProps = dispatch => ({
  fetchAPI: (address, mode) => dispatch(fetchAPI(address, mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
