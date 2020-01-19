const data = {
  users: [
    {
      firstName: "Jacob",
      lastName: "Daniel",
      country: "United Stated",
      city: "Chicago",
      avatar: "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      firstName: "Lauren",
      lastName: "Gilbert",
      country: "Australia",
      city: "Sydney",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
};

const Item = ({ user }) => (
  <div>
    <h1>Username: {user.firstName}</h1>
    <h2>Lastname: {user.lastName}</h2>
  </div>
);

class ListItems extends React.Component {
  render() {
    const users = this.props.data.users;
    const Items = users.map(user => <Item key={user.id} user={user} />);

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
