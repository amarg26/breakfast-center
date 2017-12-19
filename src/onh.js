import React from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ButtonToolbar
  
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
    name: "Smoothie",
    cost: 15
  },
  {
    id: "5",
    name: "Hot Chocolate",
    cost: 15
  }
];

 class MenuCard extends React.Component {
constructor(props) {
   super(props);
  this.state = {
    selectedItems: [],
  };

  // this.selectItem = this.selectItem.bind(this);
  //this.showModal = this.showModal.bind(this);
  //this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

// close =() => {
//     this.setState({ showModal: false });
//   };


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
          <Col xs={3}>
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

          <Col xs={3}>
            <ul>
              <h3>Your orders </h3>

              {selectedItems.map((item, i) => (
                <li key={i}>
                  {item.name} {item.cost} <i className="fa fa-inr"></i>{item.quantity}
                  <span onClick={() => this.deleteItem(i)}>cancel</span>
                </li>
              ))}
            </ul>

            {this.state.selectedItems.length > 0 ? (
              <ButtonToolbar>
                <Button
                  type="button"
                  style={{ display: "block" }}
                  onClick={this.showModal}
                >
                  Confrim
                </Button>
              </ButtonToolbar>
            ) : (
              <Button type="button" style={{ display: "none" }}>
                Confrim
              </Button>
            )}
          </Col>

          <Col xs={3}>
            <ul>
              <h3>Total</h3>

              {selectedItems.reduce(
                (acc, item) => acc + item.cost * item.quantity,
                0
              )}
              &nbsp;<i className="fa fa-inr"></i>
            </ul>
          </Col>
        </Row>

        <Modal
          show={this.state.show}
          onHide={close}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg " className="text-center">
              Your order will served shrotly , kindly pay cash only.Have a Great Morning !! 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
          <Col xs={4} xsOffset={2}>
            <ul>
              <h3>Your orders </h3>

              {selectedItems.map((item, i) => (
                <li key={i}>
                  {item.name} {item.cost} <i className="fa fa-inr"></i> {item.quantity}
                 
                </li>
              ))}
            </ul>
            </Col>


          <Col xs={2}>
             <ul>
              <h3>Total</h3>

              {selectedItems.reduce(
                (acc, item) => acc + item.cost * item.quantity,
                0 
              )}
              <i className="fa fa-inr"></i>
            </ul>
          </Col>
          </Row>  

        
          </Modal.Body>
           <Modal.Footer>
            <Button onClick={close} className='text-center'>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuCard;
