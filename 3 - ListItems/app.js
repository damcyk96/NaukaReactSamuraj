const data = {
  users: [
    {
      firstName: "Jacob",
      lastName: "Daniel",
      country: "United Stated",
      city: "Chicago",
      sex: "male"
    },
    {
      firstName: "Lauren",
      lastName: "Gilbert",
      country: "Australia",
      city: "Sydney",
      sex: "male"
    },
    {
      firstName: "Teofila",
      lastName: "Zenona",
      country: "Polska",
      city: "Sochaczew",
      sex: "female"
    },
    {
      firstName: "Agata",
      lastName: "Madame",
      country: "Polska",
      city: "Kozy",
      sex: "female"
    }
  ]
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.firstName}</h1>
    <p>Info:</p>
    <p>Lastname: {user.lastName}</p>
    <p>Sex: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  render() {
    let users = this.props.data.users;
    users = users.filter(user => user.sex === "female");

    const Items = users.map(user => <Item key={user.id} user={user} />);

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
