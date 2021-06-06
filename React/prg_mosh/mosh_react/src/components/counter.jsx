import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // imageUrl: "https://picsum.photos/200",
  };

  /*styles 
    fontSize: 20,
    fontWeight: "bold",
  }; */

  //constructor() {
  //super();
  //this.handlIncrement = this.handlIncrement.bind(this);
  // }

  handlIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handlIncrement({ id: 1 })}
          className="btn btn-secondary btn sm"
        >
          Increment{" "}
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let cl = "badge m-2 badge-";
    cl += this.state.value === 0 ? "warning" : "primary";
    return cl;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
