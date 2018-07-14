import React from "react";
import Logo from "../common/logo";
import smartInput from "../common/smart-input";

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const username = event.target[0].value;
    this.props.onChange(username);
  };

  render() {
    const { SMARTINPUT_disable, SMARTINPUT_onChange } = this.props;
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <Logo big="true" />
        <div>
          <input
            onChange={e => SMARTINPUT_onChange(e)}
            type="text"
            name="username"
            placeholder="github username"
          />
          <button disabled={SMARTINPUT_disable} type="submit">
            See profile
          </button>
        </div>
      </form>
    );
  }
}

export default smartInput(UserForm);
