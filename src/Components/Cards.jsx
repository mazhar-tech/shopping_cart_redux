import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carddata from "./CardData";
import { useState } from "react";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT } from "../redux/actions/action";
const Cards = () => {
  const [data, setData] = useState(Carddata);
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Add Item Successfully",{
      position: toast.POSITION.TOP_CENTER,
      
    });
  };
  const dlt = (id) => {
    dispatch(DLT(id));
    toast.error("Remove Item Successfully",{
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3">Add to Cart Projects</h2>
        <div className="row d-flex justify-content-center align-item-center">
          {data.map((element, id) => {
            const isItemInCart = cartItems.some(
              (item) => item.id === element.id
            );
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price:${element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      {isItemInCart ? (
                        <Button
                          className="col-lg-12"
                          variant="danger"
                          onClick={() => dlt(element.id)}
                        >
                          Remove from Cart
                        </Button>
                      ) : (
                        <Button
                          className="col-lg-12"
                          variant="primary"
                          onClick={() => send(element)}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Cards;
