import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  return (
    <div className="sidebar" md={3}>
      <Paper elevation={3} sx={{ padding: "1rem", boxShadow: "none" }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          label="search..."
          variant="standard"
        />
        <FormControl>
          <FormLabel
            sx={{
              fontFamily: "montserrat",
              fontSize: "20px",
              fontWeight: "600",
              color: "#3d3d3d",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            id="demo-radio-buttons-group-label"
          >
            Gender
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("gender", e.target.value)}
            className="radio-container"
            sx={{
              "& .MuiButtonBase-root": {
                color: "#ED910F ",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 30,
                padding: 0,
              },
              fontFamily: "montserrat",
              paddingBottom: "50px",
            }}
          >
            <div className="radio__group">
              <FormControlLabel
                sx={{
                  fontFamily: "montserrat",
                }}
                value="All"
                control={<Radio />}
                className="radio"
              />
              <h3>All</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Men" control={<Radio />} /> <h3>Men</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Women" control={<Radio />} />{" "}
              <h3>Women</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Unisex" control={<Radio />} />{" "}
              <h3>Unisex</h3>
            </div>
          </RadioGroup>
        </FormControl>
        <Divider sx={{ color: "#AAAAAA" }} />

        <FormControl>
          <FormLabel
            sx={{
              fontFamily: "montserrat",
              fontSize: "20px",
              fontWeight: "600",
              color: "#3d3d3d",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            id="demo-radio-buttons-group-label"
          >
            Brands
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
            sx={{
              "& .MuiButtonBase-root": {
                color: "#ED910F ",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 30,
                padding: 0,
              },
              fontFamily: "montserrat",
              paddingBottom: "50px",
            }}
          >
            <div className="radio__group">
              <FormControlLabel
                sx={{
                  fontFamily: "montserrat",
                }}
                value="All"
                control={<Radio />}
                className="radio"
              />
              <h3>All</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Nike" control={<Radio />} />{" "}
              <h3>Nike</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Vans" control={<Radio />} />{" "}
              <h3>Vans</h3>
            </div>{" "}
            <div className="radio__group">
              <FormControlLabel value="Puma" control={<Radio />} />{" "}
              <h3>Puma</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Adidas" control={<Radio />} />{" "}
              <h3>Adidas</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Reebok" control={<Radio />} />{" "}
              <h3>Reebok</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="New Balance" control={<Radio />} />{" "}
              <h3>New Balance</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="Shoes" control={<Radio />} />{" "}
              <h3>Shoes</h3>
            </div>
          </RadioGroup>
        </FormControl>
        <Divider />

        <FormControl>
          <FormLabel
            sx={{
              fontFamily: "montserrat",
              fontSize: "20px",
              fontWeight: "600",
              color: "#3d3d3d",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            id="demo-radio-buttons-group-label"
          >
            Price
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("_sort", e.target.value)}
            sx={{
              "& .MuiButtonBase-root": {
                color: "#ED910F ",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 30,
                padding: 0,
              },
              fontFamily: "montserrat",
              paddingBottom: "50px",
            }}
          >
            <div className="radio__group">
              <FormControlLabel value="All" control={<Radio />} /> <h3>All</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="asc" control={<Radio />} />{" "}
              <h3>Low to High</h3>
            </div>
            <div className="radio__group">
              <FormControlLabel value="desc" control={<Radio />} />{" "}
              <h3>High to Low</h3>
            </div>
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default SideBar;
