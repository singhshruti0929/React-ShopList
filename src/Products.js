import React, { Component } from "react";

class Products extends Component {
  state = {
    name: "",
    place: "",
    catagory: "",
    editId: "",
    status: "",
  };
  handleEdit = (item) => {
    const { id, ...product } = item;
    this.setState({
      ...product,
      editId: id,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e, index) => {
    e.preventDefault();
    const { editId: id, ...state } = this.state;
    state["id"] = id;
    this.props.updateProduct(state, index);
    this.setState({
      name: "",
      place: "",
      catagory: "",
      editId: "",
      status: "",
    });
  };
  handleCancle = (e) => {
    this.setState({
      name: "",
      place: "",
      catagory: "",
      editId: "",
      status: "",
    });
  };
  render() {
    const { products, deleteProduct } = this.props; /* destracturing */
    const productTable = (
      <div className="product">
        <div className="card mt-5 mb-5">
          <div class="card-header">
            <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand">Shops List</a>
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>

          {/* <div id="app" class="container">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
              <a class="navbar-brand" href="#">
                Navbar
              </a>

              <div class="" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
          <div className="card-body p-0">
            <div className="table-responsive table-hover">
              <table className="table mb-0 ">
                <thead>
                  <tr>
                    <th className="border-top-0" scope="col">
                      Name
                    </th>
                    <th className="border-top-0"> Place</th>
                    <th className="border-top-0"> Category</th>

                    <th className="border-top-0">Status</th>
                    <th className="border-top-0">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length ? (
                    products.map((product, index) => {
                      const { id, name, place, catagory, status } =
                        product; /* again destracturing */
                      return this.state.editId === id ? (
                        <tr key={index}>
                          <td>
                            <input
                              type="text"
                              className="pl-2"
                              id="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              className="pl-2"
                              id="place"
                              value={this.state.place}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="pl-2"
                              id="catagory"
                              value={this.state.catagory}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="pl-2"
                              id="status"
                              value={this.state.status}
                              onChange={this.handleChange}
                            />
                          </td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-sm mr-2"
                              onClick={(e) => this.handleSubmit(e, index)}
                            >
                              <i className="fa fa-check"></i>
                            </button>
                            <button
                              className="btn btn-sm mr-2"
                              onClick={(e) => this.handleCancle(e)}
                            >
                              <i className="fa fa-ban"></i>
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{place}</td>
                          <td>{catagory}</td>
                          <td>{status}</td>
                          <td>
                            <button
                              className="btn btn-sm mr-2"
                              onClick={() => {
                                this.handleEdit(product);
                              }}
                            >
                              <i className="fa fa-pencil"></i>
                            </button>

                            <button
                              className="btn btn-sm mr-2"
                              onClick={() => {
                                deleteProduct(id);
                              }}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colspan="4" className="text-danger">
                        {" "}
                        Shop list is empty!{" "}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
    return <div className="product-list">{productTable}</div>;
  }
}

export default Products;
