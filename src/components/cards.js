import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.cards.map((card ) => {
          return (
            <div
              key={card.id}
              id={card.id}
              onClick={(e) => {
                this.props.checkCard(e.target.id)             
                this.props.shuffleCards();
              }}
            >
              <img src={card.pictureURL} id={card.id} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
