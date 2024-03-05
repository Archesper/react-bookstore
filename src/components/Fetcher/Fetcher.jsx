import { useEffect, useState, Children } from "react";
import { useOutletContext } from "react-router-dom";
import CardWrapper from "../CardWrapper/CardWrapper";

const Fetcher = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const {otherProps} = useOutletContext();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData([
        {
          id: 1,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 2,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 75,
        },
      ]);
    }, 3000);
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";
  return CardWrapper({...otherProps, productData: data});
};

export default Fetcher;
