const Item = props => <li>{`Wyświetl ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["test", "test1", "test2", "test3"]
  };
  render() {
    const Items = this.state.items.map(item => (
      <Item key={item} content={item} />
    ));

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
