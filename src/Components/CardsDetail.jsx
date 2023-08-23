import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import { ToastContainer, toast } from "react-toastify";

const CardsDetail = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };
  useEffect(() => {
    compare();
  }, [id]);

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
    // toast.success("Add Item Successfully",{
    //   position: toast.POSITION.TOP_CENTER,

    // });
  };
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
    toast.error("Remove Item Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  useEffect(() => {
    compare();
  }, [id]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Iteams Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant :</strong> {ele.rname}
                          </p>
                          <p>
                            <strong>Price :</strong> $ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong> {ele.address}
                          </p>
                          <p>
                            <strong>Total :</strong> ${ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            {""}
                            <span
                              style={{
                                background: "green",
                                                   padding: "0.2rem 0.5rem",
                                borderRadius: "3px",
                                color: "white",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>
                            {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <i
                              className="fas fa-trash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(ele.id)}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default CardsDetail;
