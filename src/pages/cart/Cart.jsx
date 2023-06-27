import * as React from "react";
import "./Cart.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useCart } from "../../components/contexts/CartContextProvider";
import trash from "./imgs/cart-trash.svg"

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const { cart, getCart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <>
      <div className="cart">
        <span className="cart__titles">
          <p className="cart__title">Your shopping cart</p>
          <p className="cart__title-all">Select All</p>
        </span>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}}>Picture</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">Title</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">Category</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">Price</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">Model</TableCell>

              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">Count</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right">SubPrice</TableCell>
              <TableCell style={{fontFamily:"Montserrat", fontSize:"26px", fontWeight:"500", color:"#3d3d3d"}} align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell__contents" component="th" scope="row">
                  <img src={row.item.image} alt="" width={"170px"} />
                </TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">{row.item.title}</TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">{row.item.gender}</TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">{row.item.price}</TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">{row.item.model}</TableCell>

                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">
                  <input
                  className="tableCell__inp"
                  style={{fontFamily:"Montserrat"}}
                    min={1}
                    max={20}
                    type="number"
                    value={row.count}
                    onChange={(e) =>
                      changeProductCount(e.target.value, row.item.id)
                    }
                  />
                </TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">{row.subPrice}</TableCell>
                <TableCell style={{fontFamily:"Montserrat", fontSize:"20px", fontWeight:"500", color:"#3d3d3d"}} align="right">
                  <img src={trash} alt="" onClick={() => deleteCartProduct(row.item.id)}
                  className="tableCell__delete"
                  width={"30px"}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <a href="/checkout">
        <Button 
        style={{backgroundColor:"#ED910FA1", marginLeft:"1rem",marginBottom:"1rem", width:"auto", color:"#3d3d3d", fontSize:"20px", fontWeight:"600"}}
        onClick={cartCleaner}
        className="cart__clean"
        >BUY NOW FOR {cart?.totalPrice} $
        </Button>
        </a>
      </TableContainer>
    </>
  );
}
