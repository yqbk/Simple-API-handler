import React, { Component } from "react";
import BareHighlight from "react-fast-highlight/lib/BareHighlight";
import hljs from "./customhl.js";

export default class CustomHighlight extends Component {
  render() {
    const { children, ...props } = this.props;

    console.log(" -> ", children)

    return (
      <BareHighlight {...props} highlightjs={hljs}>
        {children}
      </BareHighlight>
    );
  }
}
