import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect({ product, setProduct }) {
  function handleChange(e) {
    setProduct({ ...product, category: e.target.value });
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        label="Category"
        value={product.category}
        onChange={handleChange}
      >
        <MenuItem value="Nike">Nike</MenuItem>
        <MenuItem value="Vans">Vans</MenuItem>
        <MenuItem value="Puma">Puma</MenuItem>
        <MenuItem value="Adidas">Adidas</MenuItem>
        <MenuItem value="Reebok">Reebok</MenuItem>
        <MenuItem value="New Balance">New Balance</MenuItem>
        <MenuItem value="Shoes">Shoes</MenuItem>
      </Select>
    </FormControl>
  );
}
