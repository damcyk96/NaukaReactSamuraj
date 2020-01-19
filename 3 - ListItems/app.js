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
  state = {
    select: "all"
  };

  handleUsersFilter = option => {
    this.setState({
      select: option
    });
  };

  userList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />);

      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item user={user} key={user.id} />);

      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item user={user} key={user.id} />);
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Female
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Male
        </button>
        {this.userList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
