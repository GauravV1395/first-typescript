import React from "react";
import { Redirect } from "react-router-dom";

interface OwnState {
  inputValue: string;
  onEnter: boolean;
}

export default class SearchInput extends React.Component<{}, OwnState> {
  public state = { inputValue: "", onEnter: false };

  public onFormSubmit = (event: any): void => {
    event.preventDefault();
    this.setState({
      onEnter: true
    });
  };

  public onInputChange = (event: any): void => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.value
    });
  };

  public render() {
    const { onEnter, inputValue } = this.state;
    if (onEnter === true) {
      return (
        <Redirect
          to={{
            pathname: "/image_results",
            state: { searchTerm: inputValue }
          }}
        />
      );
    }
    return (
      <div className="ui segment mb-3">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Enter Search Term: </label>
            <input
              type="text"
              autoFocus={true}
              value={this.state.inputValue}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
