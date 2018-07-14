import React from "react";
import Logo from "../common/logo";

// controlled form, presentation and logic is separate
// uncontrolled form, work on the form order

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }
  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const username = this.state.value;
    this.props.onChange(username);
  };
  render() {
    const { value } = this.state;

    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <Logo big="true" />
        <div>
          <input
            onChange={this.onChange}
            type="text"
            name="username"
            placeholder="github username"
          />
          <button disabled={!value} type="submit">
            See profile
          </button>
        </div>
      </form>
    );
  }
}

export default UserForm;
