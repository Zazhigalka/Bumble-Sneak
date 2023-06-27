import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GenderSelect({ product, setProduct }) {
  function handleChange(e) {
    setProduct({ ...product, gender: e.target.value });
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        label="Gender"
        value={product.gender}
        onChange={handleChange}
      >
        <MenuItem value="Men">Men</MenuItem>
        <MenuItem value="Women">Women</MenuItem>
        <MenuItem value="Unisex">Unisex</MenuItem>
      </Select>
    </FormControl>
  );
}
