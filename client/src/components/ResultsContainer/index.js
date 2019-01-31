import React from "react";
import Result from "./Result";
import "./index.css";


export default class ResultsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showOtherOptions: false
    }
    this.toggleOtherOptions = this.toggleOtherOptions.bind(this)
  }

  toggleOtherOptions(){
    this.setState({
      showOtherOptions: !this.state.showOtherOptions
    })
  }

  render() {
    return (
      <div className="resultsContainer">
        {
          this.props.results.length > 0 &&
          <div>
            <Result key={this.props.results[0].brand + this.props.results[0].name} data={this.props.results[0]} />
            <button onClick={this.toggleOtherOptions}>{this.state.showOtherOptions ? "Hide Other Options" : "Show Other Options"} </button>
            {
              this.state.showOtherOptions &&
              this.props.results.slice(1).map(result => (
                <Result key={result.brand + result.name} data={result} />
              ))
            }
          </div>
        }
        {/*
            this.props.results.length > 0
              ? require("../../static/car_2.png")
              : require("../../static/car_1.png")
          */}
      </div>
    );
  }
}
