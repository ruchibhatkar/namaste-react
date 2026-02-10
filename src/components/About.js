import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Class did mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is online food delivery app</h2>
        <UserClass name={"First"} location={"Ratnagiri, Maharashtra"} />
      </div>
    );
  }
}

export default About;
