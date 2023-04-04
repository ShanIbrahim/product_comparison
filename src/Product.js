import { useState } from "react";
import _ from "lodash";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Products } from "./Products";
import { Button, CardMedia, Grid, Snackbar, IconButton } from "@mui/material";
import ComparisionTable from "./ComparisionTable";
import { CheckCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, selected, theme) {
  return {
    fontWeight:
      selected.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Product() {
  const theme = useTheme();
  const [selected, setSelected] = useState("");
  const [index, setIndex] = useState(0);
  const product_names = _.map(Products, "title");
  const product_images = _.map(Products, "image");
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setIndex(_.findIndex(Products, (obj) => obj.title === e.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {};
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Login created successfully"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CheckCircleOutline fontSize="small" />
          </IconButton>
        }
      />
      <Grid container spacing={5} sx={{ m: 1 }}>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">
              Select one Product
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={selected}
              onChange={handleChange}
              input={<OutlinedInput label="Select one Product" />}
              MenuProps={MenuProps}
            >
              {product_names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selected, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CardMedia
            sx={{ width: 400, height: 400 }}
            image={product_images[index]}
          />
        </Grid>
        <Grid item xs={8}>
          <ComparisionTable index={index} />
        </Grid>
        <Grid item>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleLogout}
            >
              logout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
