import React from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  Table
} from "react-bootstrap";

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
  },
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
  },
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
  },
];


 class MenuCard extends React.Component {
state = {
    selectedItems: [],
  };


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  selectItem = item => {
    const {  selectedItems } = this.state;
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
    let close = () => this.setState({ show: false });
    return (
      <div className="container">
        <p>Welcome {this.props.name}! Pick your any Break-fast menu you want</p>
        <Row>
          <Col sm={8} xs={12}  >
            <Col sm={4} xs={12}  >
            <ul>
              <h3>Morning Drinks </h3>

              {MorningDrinks.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul>
           </Col>
           <Col sm={4} xs={12}  >
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
             </Col>
            <Col sm={4} xs={12} > 
            <ul>
              <h3>Maharashtra </h3>
              {MaharashtraDishes.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul>
            </Col>
            <Col sm={4} xs={12}  >
            <ul>
              <h3>Gujrati </h3>
              {GujratiDishes.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul>
            </Col>
            <Col sm={4} xs={12} >
             <ul>
              <h3>Rajasthani</h3>
              {RajasthaniDishes.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul> 
            </Col> 
             <Col sm={4} xs={12} >
             <ul>
              <h3>South Indian</h3>
              {sIndianDishes.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul> 
            </Col>
            <Col sm={4} xs={12} >
             <ul>
              <h3>Fruit Juices</h3>
              {FruitJuices.map((item, i) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={i}
                  onClick={() => this.selectItem(item)}
                >
                  {item.name} {item.cost} <i className="fa fa-inr"></i>
                </li>
              ))}
            </ul> 
            </Col>              
          </Col>

          <Col lg={4} md={6} sm={6} xs={12} >
            
              <h3>Your Menu </h3>
                <Table responsive id="table">
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
                 <td>{item.cost}&nbsp;<i className="fa fa-inr"></i></td>
                 <td>{item.quantity}</td>
                 <td><span onClick={() => this.deleteItem(i)}>cancel</span></td>                 
                </tr>
                
              ))}
                </tbody>
              </Table>
             
            <Row>
             <Col md={12} sm={4} xs={12}  className="total">
              <h3>Total</h3>

              {selectedItems.reduce(
                (acc, item) => acc + item.cost * item.quantity,
                0
              )}
              &nbsp;<i className="fa fa-inr"></i>
             </Col>

               <Col md={6} sm={4}  xs={4} xsOffset={4} >
            {this.state.selectedItems.length > 0 ? (
                
                <Button
                  type="button"
                  style={{ display: "block" }}
                  onClick={this.showModal}
                  className="confrim"
                >
                  Confrim
                </Button>
             
            ) : (
              <Button type="button" style={{ display: "none" }} >
                Confrim
              </Button>
            )}
             </Col>
          </Row>
          
          </Col>
        </Row>

        <Modal
          show={this.state.show}
          onHide={close}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg " className="text-center">
              Your order will served shrotly.Kindly pay cash only.Have a Great Morning !! 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
          <Col md={12} sm={12} xs={12}  >
             <Table responsive>
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
                 <td>{item.cost}&nbsp;<i className="fa fa-inr"></i></td>
                 <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.quantity}</td> 
                </tr>
                
              ))}
                </tbody>
              </Table>

            </Col>


          {/*<Col xs={12} xsOffset={4} sm={4} md={6}>*/}
            <Col md={12} mdOffset={5} sm={4} xs={12} xsOffset={4}>
              <h3 className="totalModal">Total</h3>
                &nbsp;&nbsp;&nbsp;
            {selectedItems.reduce(
                (acc, item) => acc + item.cost * item.quantity,
                0 
              )}
              &nbsp;<i className="fa fa-inr"></i>
          
          </Col>
          </Row>  

        
          </Modal.Body>
           <Modal.Footer>
           <Col md={6} mdOffset={5} sm={6} xs={12} xsOffset={4} >
            <Button onClick={close} className='text-center closeModal'>Close</Button>
            </Col>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuCard;
