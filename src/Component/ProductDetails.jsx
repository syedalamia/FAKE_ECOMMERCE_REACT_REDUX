import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { storeSingleProduct } from "../Store/Action/allProducts";
import Loading from "./Loading";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const ProductDetails = () => {
  const { count, productList } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.productStore);
  const { loading } = useSelector((state) => state.loaderStore);
  const classes = useStyles();
  const params = useParams();
  let { id } = params;
  useEffect(() => {
 dispatch(storeSingleProduct(id))
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        count: count ? count + 1 : 1,
        productList: productList
          ? productList.concat(selectedProduct)
          : [...selectedProduct],
      },
    });
  };

  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Container>
          <Link
            to="/"
            className="btn btn-light my-3"
            style={{ textDecoration: "none" }}
          >
            Go Back
          </Link>
          {selectedProduct.hasOwnProperty("title") && (
            <Card className={classes.root}>
              <CardMedia
                component="img"
                alt={selectedProduct.title}
                height="400"
                image={selectedProduct.image}
                title={selectedProduct.title}
              /> 
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {selectedProduct.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {selectedProduct.description}
                  {selectedProduct.category}
                  <br />
                </Typography>
                <Typography variant="h6" color="primary" component="p">
                  price: ${selectedProduct.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={addToCart}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          )}
        </Container>
      )}
    </>
  );
};

export default ProductDetails;
