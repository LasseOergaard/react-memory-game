import React, {Component} from "react";
import Cards from "./components/cards";
import Header from "./components/header";

import cat from "./images/cat.png";
import dog from "./images/dog.webp";
import elephant from "./images/elephant.png";
import kangaroo from "./images/kangaroo.png";
import lion from "./images/lion.jpeg";
import monkey from "./images/monkey.png";
import ostrich from "./images/ostrich.png";
import panga from "./images/panga.png";
import turtle from "./images/turtle.png";
import zebra from "./images/zebra.webp";


export default class App extends Component {

  constructor(props) {
    super(props)

    /* States */

    this.state = {
      points: 0,
      highscore: 0,
      cards: [],
      cardsClicked: [],
    }

    /* Functions */

    this.shuffleCards = () => {
      this.fullCardList = [
        { id: 1, pictureURL: dog },
        { id: 2, pictureURL: cat },
        { id: 3, pictureURL: elephant },
        { id: 4, pictureURL: kangaroo },
        { id: 5, pictureURL: lion },
        { id: 6, pictureURL: monkey },
        { id: 7, pictureURL: ostrich },
        { id: 8, pictureURL: panga },
        { id: 9, pictureURL: turtle },
        { id: 10, pictureURL: zebra },
      ];
      this.currentCardList = [...this.fullCardList];
      this.shuffleCardList = [];
      let fullCardListLength = this.fullCardList.length;

      for (let i = 0; i < this.fullCardList.length; i++) {
        let myNum = Math.floor(Math.random() * fullCardListLength);
        this.shuffleCardList.push(this.currentCardList[myNum]);
        this.currentCardList.splice(myNum, 1);
        fullCardListLength--;
      }
      this.setState({ cards: this.shuffleCardList });
    };

    this.checkCard = (id) => {
      if(this.state.cardsClicked.includes(id)) {
        if (this.state.points > this.state.highscore) {
          this.setState({
            highscore: this.state.points,
          })
        }
        this.setState({
          cardsClicked: [],
          points: 0,
        })
      } else {
        console.log("Yes +1")
        this.setState({
          cardsClicked: [...this.state.cardsClicked, id],
          points: this.state.points + 1
        })
      }
    };
  }  

  componentDidMount() {
    this.shuffleCards()
  }

  render() {
    return (
      <div>
        <Header points={this.state.points} highscore={this.state.highscore}/>
        <Cards cards={this.state.cards} checkCard={this.checkCard} shuffleCards={this.shuffleCards} />
      </div>
    )
  }
}
