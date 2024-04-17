import { useOutletContext } from "react-router-dom"
import CardWrapper from "../CardWrapper/CardWrapper";
import Fetcher from "../Fetcher/Fetcher";

const PostFetchRenderer = () => {
  const {productData, setProductData, updateCart} = useOutletContext();
  if (productData.length) {
    return <CardWrapper productData={productData} updateCart={updateCart}/>
  } else {
    return <Fetcher setProductData={setProductData} productData={productData}/>
  }
}

export default PostFetchRenderer;