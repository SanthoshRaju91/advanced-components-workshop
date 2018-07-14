import React from "react";

// higher order component
// function tat takes a component as an input
// and returns a component

function smartInput(Component) {
  class enhancedComponent extends React.Component {
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
      return (
        <Component
          {...this.props}
          SMARTINPUT_disable={this.state.value.length === 0}
          SMARTINPUT_onChange={this.onChange}
        />
      );
    }
  }

  return enhancedComponent;
}

export default smartInput;
