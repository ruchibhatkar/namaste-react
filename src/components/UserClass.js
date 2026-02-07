import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //Creating state variables inside class based components
    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name + "Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Class did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(this.props.name + "Child Render");

    return (
      <div className="userCard">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //Updating value of state variables in class based components
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: ruchibhatkar</h3>
      </div>
    );
  }
}

export default UserClass;
