import Axios from "axios";
import { api_url } from "../../helpers/api_url";

export const fetchCategoriesAction = () => {
  return (dispatch) => {
    Axios.get(`${api_url}/categories`)
      .then((res) => {
        dispatch({
          type: "FETCH_CATEGORIES",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchProductsAction = () => {
  return (dispatch) => {
    Axios.get(`${api_url}/products`)
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const fetchProductByIdAction = (id) => {
  return (dispatch) => {
    Axios.get(`${api_url}/products/${id}`)
      .then((res) => {
        dispatch({
          type: "FETCH_BY_ID",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
