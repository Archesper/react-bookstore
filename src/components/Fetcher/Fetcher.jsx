import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CardWrapper from "../CardWrapper/CardWrapper";

const Fetcher = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const {updateCart} = useOutletContext();
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
        {
          id: 3,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 4,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 75,
        },
        {
          id: 5,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 6,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 75,
        },
        {
          id: 7,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 8,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 75,
        },
        {
          id: 9,
          image: "https://via.placeholder.com/200/92c952",
          title: "Lorem Ipsum",
          description: "Lorem Ipsumly lorem ipsum",
          price: 70,
        },
        {
          id: 10,
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
  return CardWrapper({updateCart: updateCart, productData: data});
};

export default Fetcher;
