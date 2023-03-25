import React, {Component} from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          Memory Game
        </div>
        <div className="header-points">
          <div className="points">Points: {this.props.points}</div>
          <div className="highscore">Highscore: {this.props.highscore}</div>
        </div>
      </div>
    )
  }
}
