import { Component } from "react";

class Purchase extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <form>
          <label>Medicine</label>
          <select>
            <option value="Ford">Ford</option>
            <option value="Volvo" selected>
              Volvo
            </option>
            <option value="Fiat">Fiat</option>
          </select>
        </form>
      </>
    );
  }
}

export default Purchase;
