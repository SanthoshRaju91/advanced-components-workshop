import React from "react";
import Logo from "../common/logo";
import SmartComponent from "../common/smart-input";

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const username = event.target[0].value;
    this.props.onChange(username);
  };
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit} autoComplete="off">
        <Logo big="true" />
        <SmartComponent>
          {(onChange, disabled) => (
            <div>
              <input
                onChange={onChange}
                type="text"
                name="username"
                placeholder="github username"
              />
              <button disabled={disabled} type="submit">
                See profile
              </button>
            </div>
          )}
        </SmartComponent>
      </form>
    );
  }
}

export default UserForm;
