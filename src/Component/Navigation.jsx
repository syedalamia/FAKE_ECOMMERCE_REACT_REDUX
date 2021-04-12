import React from "react";
import { Toolbar, Container, Grid, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { count } = useSelector((state) => state.cartStore);
  const history = useHistory();
  const routePage = (url) => {
    history.push(url);
  };
  return (
    <>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Grid item>
              <MenuItem onClick={() => routePage("/")}>ECOMMERCE</MenuItem>
            </Grid>

            <Grid item></Grid>
        
          </Grid>

          <Grid container justify="flex-end">
            <Grid item>
              <MenuItem onClick={() => routePage("/cart")}>
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="https://www.flaticon.com/svg/vstatic/svg/4357/4357349.svg?token=exp=1618225179~hmac=e5cf15bb29ee5b9de87c94f403c6754f"
                  alt=""
                />
                <span style={{ color: "black" }}>{count}</span>
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/Login")}>Login</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/admin")}>admin</MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;
