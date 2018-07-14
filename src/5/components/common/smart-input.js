import React from "react";

class SmartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const disabled = this.state.value.length < 3;

    return this.props.children(this.onChange, disabled);
  }
}

export default SmartComponent;
