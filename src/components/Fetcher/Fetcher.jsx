import { useEffect, useState } from "react";
import no_cover_found from "../../assets/images/no_cover_found.png"
import CardWrapper from "../CardWrapper/CardWrapper";

const Fetcher = ({setProductData, productData}) => {
  const [loading, setLoading] = useState(!productData.length);
  console.log(loading);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) {
      return;
    }
    const fetchData = async () => {
      const requestUrl = (author, count) =>
        `https://openlibrary.org/search.json?q=author:${author} language:eng&fields=key,title,author_name,editions,cover_i&limit=${count}`;
      const authors = [
        "colleen hoover",
        "j k rowling",
        "john green",
        "stephen king",
        "leigh bardugo",
        "khaled hosseini",
        "tolkien",
        "agatha christie",
        "taylor jenkins reid",
        "christina li",
        "tashie bhuiyan",
      ];
      const data = [];
      for (const author of authors) {
        const response = await fetch(
          requestUrl(author, Math.floor(Math.random() * 3) + 2)
        ); // Random amount of books between 3 and 5
        const json = await response.json();
        if (json.numFound > 0) {
          json.docs.forEach((work) => {
            const id = work.editions.docs[0].key.split("/").slice(-1);
            const cover_i = work.editions.docs[0].cover_i;
            const image = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : no_cover_found;
            const title = work.editions.docs[0].title;
            const description = work.author_name[0];
            const price = 70;
            data.push({ id, title, image, description, price });
          });
        }
      }
      const shuffledData = data.sort(() => Math.random() - 0.5);
      setProductData(shuffledData);
    };
    fetchData();
  }, []);
  if (loading) return <CardWrapper isLoading={true}/>;
  if (error) return "Error!";
};

export default Fetcher;
