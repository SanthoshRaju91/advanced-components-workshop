import React from "react";
import Logo from "../common/logo";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onChange(this.state.inputValue);
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
