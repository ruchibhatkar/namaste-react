import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //Creating state variables inside class based components
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ruchibhatkar");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="userCard">
        <h2>Name: {name}</h2>
        <img src="https://avatars.githubusercontent.com/u/145284332?v=4" />
        <h3>Contact: ruchibhatkar</h3>
      </div>
    );
  }
}

export default UserClass;
