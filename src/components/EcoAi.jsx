import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

class EcoAi extends Component {
  componentDidMount() {
    Crisp.configure("7c8523d3-9d67-4d22-a243-75f39055865e");
  }

  render() {
    return <div>My Awesome App</div>;
  }
}

export default EcoAi;
