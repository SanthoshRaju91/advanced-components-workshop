import React from "react";
import Logo from "../common/logo";

class UserForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.onChange(event.target.username.value);
  }
  render() {
    return (
      <form
        className="user-form"
        onSubmit={this.onSubmit.bind(this)}
        autoComplete="off"
      >
        <Logo big="true" />
        <div>
          <input
            type="text"
            name="username"
            placeholder="github username"
            onChange={e =>
              this.setState({
                inputValue: e.target.value
              })
            }
          />
          <button type="submit">See profile</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
