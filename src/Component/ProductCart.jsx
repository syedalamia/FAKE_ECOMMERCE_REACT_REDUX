import React from "react";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    margin: "auto",
  },
  media: {
    height: 300,
    width: "100%",
  },
});

const ProductCart = () => {
  const { productList } = useSelector((state) => state.cartStore);
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        {productList &&
          productList.map((product, index) => {
            return (
              <Grid item md={4} sm={6} key={index}>
                <Card className={classes.root}>
                  <CardActionArea onClick={() => product.id}>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        style={{ fontSize: "16px" }}
                      >
                        {product.title}
                      </Typography>
                      <br />
                      <Typography variant="subtitle1" color="primary">
                        Price: ${product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default ProductCart;
