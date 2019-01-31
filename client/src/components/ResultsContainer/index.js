import React from "react";
import Result from "./Result";
import "./index.css";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"

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
          <div className="resultsList">
            <Result key={this.props.results[0].brand + this.props.results[0].name} data={this.props.results[0]} />
            <Fab
              variant="extended"
              size="small"
              color="grey"
              onClick={this.toggleOtherOptions}
              className="fab"
            >
              {this.state.showOtherOptions ? "Hide Other Options" : "Show Other Options"}
            </Fab>
            {
              this.state.showOtherOptions &&
              this.props.results.slice(1).map(result => (
                <Result key={result.brand + result.name} data={result} />
              ))
            }
          </div>
        }
      </div>
    );
  }
}
