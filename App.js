import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from "react-dom";

// header starts

// function Human({ name, work }) {
//   return (
//     <div>
//       My name is {name}, my work is {work}{" "}
//     </div>
//   );
// }

// function Humans() {
//   return (
//     <div>
//       <Human name="Stas" work="Manager" />
//       <Human name="Alla" work="Programmer" />
//       <Human name="Gerb" work="Software ingenere" />
//       <Human name="Moose" work="Manager l" />
//     </div>
//   );
// }

// function Hader() {
//   return (
//     <div>
//       <Humans />
//     </div>
//   );
// }

// header ends

// main starts

// function Content({ news }) {
//   return <div>Today we will talk abiut {news}</div>;
// }

// function ContentList() {
//   return (
//     <div className="mainContentList">
//       <Content news="Work" />
//       <Content news="Health" />
//       <Content news="Teeth" />
//       <Content news="Master" />
//     </div>
//   );
// }
// function Main() {
//   return (
//     <main>
//       <ContentList />
//     </main>
//   );
// }

// footer starts

// function Something({ some }) {
//   return <div> {some} </div>;
// }

// function FooterMenu() {
//   return (
//     <div>
//       <Something some="Lorem inerg ewrge llwe frike wemf oge" />
//       <Something some="Lorem inerg ewrge llwe frike wemf oge" />
//       <Something some="Lorem inerg ewrge llwe frike wemf oge" />
//       <Something some="Lorem inerg ewrge llwe frike wemf oge" />
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <FooterMenu />
//     </footer>
//   );
// }

// footer ends

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      interval: "",
    };
  }

  changePosition = (e) => {
    this.setState({
      position: this.state.position + 1,
    });
  };

  start = () => {
    this.interval = setInterval(this.changePosition, 100);
  };

  finish = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="App">
        <p>My position is {this.state.position}</p>

        <div className="buttons">
          <button onClick={this.start}> Start </button>

          <button onClick={this.finish}>Finish</button>
        </div>
      </div>
    );
  }
}
export default App;
