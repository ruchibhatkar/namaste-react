import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="userCard">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: ruchibhatkar</h3>
      </div>
    );
  }
}

export default UserClass;
