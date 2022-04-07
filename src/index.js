import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./Spinner";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div className="border red">
          <div>Error: {this.state.errorMessage}</div>;
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="border red">
          <SeasonDisplay lat={this.state.lat} />;
        </div>
      );
    }

    return (
      <div className="border red">
        <SeasonDisplay lat={this.state.lat} />;
      </div>
    );
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
