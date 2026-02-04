import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is online food delivery app</h2>
      <User name={"Ruchi Bhatkar"} />
      <UserClass
        name={"Ruchi Sudhir Bhatkar"}
        location={"Ratnagiri, Maharashtra"}
      />
    </div>
  );
};

export default About;
