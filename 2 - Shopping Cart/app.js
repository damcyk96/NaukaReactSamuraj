class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 5
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  render() {
    return (
      <div>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <button>{this.state.shoppingCart}</button>
        <button
          disabled={
            this.state.availableProducts === this.state.shoppingCart
              ? true
              : false
          }
          onClick={this.handleAddToCart}
        >
          +
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
