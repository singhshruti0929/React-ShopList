import React, { Component } from "react";
class AddProduct extends Component {
  state = {
    id: "",
    name: "",
    place: "",
    catagory: "",
    open: "",
    close: "",
    curTime: new Date().toLocaleTimeString(),
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      id: "",
      name: "",
      place: "",
      catagory: "",
      open: "",
      close: "",
    });
  };
  render() {
    return (
      <div className="card">
     

        {/* <div className="App">
          <p>Current Time : {this.state.curTime}</p>
        </div> */}
        <div className="card-header">Add new Shop Details</div>
        <div className="card-body">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control ml-sm-2 mr-sm-4 my-2"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
            </div>
            <div class="form-group ">
              <div class="input-group">
                <label class="input-group-text">Place</label>
                <select
                  class="form-select"
                  onChange={this.handleChange}
                  id="place"
                  value={this.state.place}
                >
                  <option selected>Choose...</option>
                  <option value="Thane">Thane</option>
                  <option value="Pune">Pune</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Ahmednagar">Ahmednagar</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>

            <div class="form-group ">
              <label>Opening Time</label>
              <input
                type="time"
                className="form-control ml-sm-2 mr-sm-4 my-2"
                id="open"
                onChange={this.handleChange}
                value={this.state.open}
                required
              />
            </div>
            <div class="form-group ">
              <label>Closing Time</label>
              <input
                type="time"
                className="form-control ml-sm-2 mr-sm-4 my-2"
                id="close"
                onChange={this.handleChange}
                value={this.state.close}
                required
              />
            </div>
            <div className="form-group">
              <div class="input-group">
                <label class="input-group-text">Category</label>
                {/* <input
                type="text"
                className="form-control ml-sm-2 mr-sm-4 my-2"
                id="catagory"
                onChange={this.handleChange}
                value={this.state.catagory}
                required
              /> */}
                <select
                  class="form-select"
                  id="catagory"
                  onChange={this.handleChange}
                  value={this.state.catagory}
                  required
                >
                  <option selected>Choose...</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Butcher">Butcher</option>
                  <option value="Baker">Baker</option>
                  <option value="Chemist">Chemist</option>
                  <option value="Stationery">Stationery</option>
                </select>
              </div>
            </div>
            <div className="ml-auto text-right">
              <button type="submit" className="btn btn-dark my-2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
