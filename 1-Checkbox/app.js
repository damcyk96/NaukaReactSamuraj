const ValidationMessage = props => <p>{props.txt}</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({ isFormSubmitted: true });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film." />;
      } else {
        return (
          <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli nie masz 16 lat" />
        );
      }
    } else {
      return null;
    }
  };
  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lata</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
