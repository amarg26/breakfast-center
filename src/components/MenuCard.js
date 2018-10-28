import React from "react";
import "../App.css";

const MorningDrinks = [
  {
    id: "1",
    name: "Tea",
    cost: 15
  },
  {
    id: "2",
    name: "Coffee",
    cost: 15
  },
  {
    id: "3",
    name: "Milk",
    cost: 15
  }
];

const ChoclateDrinks = [
  {
    id: "4",
    name: "Chocolate milk",
    cost: 15
  },
  {
    id: "5",
    name: "Espressino",
    cost: 15
  }
];

const MaharashtraDishes = [
  {
    id: "6",
    name: "Vada Pav",
    cost: 10
  },
  {
    id: "7",
    name: "Kanda Bhaji",
    cost: 15
  },
  {
    id: "8",
    name: "Missal Pav ",
    cost: 15
  },
  {
    id: "9",
    name: "Pav Bhaji",
    cost: 15
  },
  {
    id: "10",
    name: "Poha",
    cost: 15
  }
];

const sIndianDishes = [
  {
    id: "11",
    name: "Idli",
    cost: 10
  },
  {
    id: "12",
    name: "Wada Sambar",
    cost: 15
  },
  {
    id: "13",
    name: "Idli Wada Mix ",
    cost: 15
  },
  {
    id: "14",
    name: "Masala Dosa",
    cost: 15
  },
  {
    id: "15",
    name: "Cut Dosa",
    cost: 15
  },
  {
    id: "16",
    name: "Uttappa",
    cost: 15
  }
];

const GujratiDishes = [
  {
    id: "17",
    name: "Khaman Dhokla",
    cost: 15
  },
  {
    id: "18",
    name: "Khandvi Dhokla",
    cost: 15
  }
];

const RajasthaniDishes = [
  {
    id: "19",
    name: "Kachori",
    cost: 10
  },
  {
    id: "20",
    name: "Samosa",
    cost: 10
  }
];

const FruitJuices = [
  {
    id: "21",
    name: "Apple",
    cost: 10
  },
  {
    id: "22",
    name: "Cocktail",
    cost: 10
  },
  {
    id: "23",
    name: "Pineapple",
    cost: 10
  },
  {
    id: "24",
    name: "Pomgranate",
    cost: 10
  }
];

class MenuCard extends React.Component {
  state = { selectedItems: [] };

  selectItem = item => {
    const { selectedItems } = this.state;
    const newItem = {
      ...item,
      quantity: 1
    };

    const el = selectedItems.filter(el => el.id === newItem.id);

    if (selectedItems.length === 0) {
      this.setState({
        selectedItems: selectedItems.concat([newItem])
      });
    } else {
      if (el.length) {
        const newSelectedItems = selectedItems.map(item => {
          if (item.id === newItem.id) {
            item.quantity++;
          }

          return item;
        });

        this.setState({
          selectedItems: newSelectedItems
        });
      } else {
        this.setState({
          selectedItems: selectedItems.concat([newItem])
        });
      }
    }
  };

  deleteItem = i => {
    this.setState({
      selectedItems: this.state.selectedItems.filter((item, index) => {
        return index !== i;
      })
    });
  };

  render() {
    const { selectedItems } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <h3 className="text-center">Morning Drinks </h3>
                  {MorningDrinks.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <h3>Fruit Juices</h3>
                  {FruitJuices.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <h3>Maharashtra </h3>
                  {MaharashtraDishes.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <h3>South Indian</h3>
                  {sIndianDishes.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <h3>Rajasthani</h3>
                  {RajasthaniDishes.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul>
                  <h3>Gujrati </h3>
                  {GujratiDishes.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <h3>Chocolate Drinks </h3>
                  {ChoclateDrinks.map((item, i) => (
                    <li
                      style={{ cursor: "pointer" }}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    >
                      {item.name} {item.cost} <i className="fa fa-inr"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <h3>Your Menu </h3>
            <table className="responsive table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Cost</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>
                      {item.cost}&nbsp;<i className="fa fa-inr" />
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      <span onClick={() => this.deleteItem(i)}>cancel</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <section className="col total">
              <h3>Total</h3>
              {selectedItems.reduce(
                (acc, item) => acc + item.cost * item.quantity,
                0
              )}
              &nbsp;<i className="fa fa-inr" />
            </section>

            <section className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
              {this.state.selectedItems.length > 0 ? (
                <button
                  type="button"
                  className="confrim btn btn-default"
                  data-toggle="modal"
                  data-target="#Modal"
                >
                  Confrim
                </button>
              ) : (
                  <button type="button" style={{ display: "none" }}>
                    Confrim
                </button>
                )}
            </section>
          </div>
        </div>

        <div
          className="modal fade"
          id="Modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Modal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Your order will served shrotly.Kindly pay cash only.Have a
                  Great Morning !!
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <section className="row">
                  <section className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <table className=" table-bordered responsive col col-sm-12 col-md-12 col-lg-12 col-xl-12" >
                      <thead>
                        <tr id="table">
                          <th>Items</th>
                          <th>Cost</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedItems.map((item, i) => (
                          <tr key={i}>
                            <td style={{ color: "#000" }}>{item.name}</td>
                            <td style={{ color: "#000" }}>
                              {item.cost}&nbsp;<i className="fa fa-inr" />
                            </td>
                            <td style={{ color: "#000" }}>{item.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <section className="col col-sm-4 col-md-12 offset-md-4 col-lg-4 col-xl-4">
                    <h3 className="totalModal">Total</h3>
                    &nbsp;&nbsp;&nbsp;
                    {selectedItems.reduce(
                      (acc, item) => acc + item.cost * item.quantity,
                      0
                    )}
                    &nbsp;<i className="fa fa-inr" />
                  </section>
                </section>
              </div>
              <div className="modal-footer">
                <section className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <button
                    type="button"
                    className="btn btn-secondary text-center mr-auto "
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCard;