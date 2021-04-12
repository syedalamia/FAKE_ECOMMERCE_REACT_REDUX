import { ActionTypes } from "../types";
import axios from "axios";
import {setLoader} from './setLoader'

export const storeAllProduct=()=>async(dispatch,getState)=>{
  dispatch(setLoader(true));
  let {data}=await axios.get('http://54.162.199.74/products')
  // let {data}=await axios.get('http://127.0.0.1:8080/products')
  dispatch(storeProductList(data));
  dispatch(setLoader(false));
}
export const storeSingleProduct=(id)=>async(dispatch,getState)=>{
  dispatch(setLoader(true));
  //  let {data}=await axios.get(`http://127.0.0.1:8080/products/${id}`)
  let {data}=await axios.get(`http://54.162.199.74/products/${id}`)
  dispatch(storeProduct(data));
  dispatch(setLoader(false));
}

const storeProductList=(data)=>{
  return {
      type:ActionTypes.STORE_ALL_PRODUCT,
      payload:data
  }
}

const storeProduct=(data)=>{
  return {
      type:ActionTypes.SELECTED_PRODUCT,
      payload:data
  }
}
