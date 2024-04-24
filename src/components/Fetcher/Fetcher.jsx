import { useEffect, useState } from "react";
import no_cover_found from "../../assets/images/no_cover_found.png";
import styles from "./Fetcher.module.css"
import CardWrapper from "../CardWrapper/CardWrapper";

const Fetcher = ({ setProductData, productData }) => {
  const [loading, setLoading] = useState(!productData.length);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!loading) {
      return;
    }
    const fetchData = async () => {
      const authors = [
        "Colleen Hoover",
        "J. K. Rowling",
        "John Green",
        "Stephen King",
        "Leigh Bardugo",
        "Khaled Hosseini",
        "J.R.R. Tolkien",
        "Agatha Christie",
        "Taylor Jenkins Reid",
        "Christina Li",
        "Tashie Bhuiyan",
      ];
      const authorString = authors.reduce(
        (accumulator, current, currentIndex) => {
          if (currentIndex === 0) {
            return `"${current}"`;
          }
          return accumulator + ` OR "${current}"`;
        },
        ""
      );
      const requestUrl = `https://openlibrary.org/search.json?q=author:(${authorString}) language:eng&fields=key,title,author_name,editions,cover_i&limit=500`;
      let response;
      let json;
      try {
        response = await fetch(requestUrl);
        json = await response.json();
      } catch (error) {
        setError("Request failed.");
        setLoading(false);
      }
      if (response && !response.ok) {
        setError(`Request failed.`);
        setLoading(false);
      }
      const authorMaxCounts = authors.reduce((resultObject, author) => {
        resultObject[author] = Math.floor(Math.random() * 3) + 2;
        return resultObject;
      }, {});
      const authorCounts = authors.reduce((resultObject, author) => {
        resultObject[author] = 0;
        return resultObject;
      }, {});
      const saturatedAuthors = [];
      const data = [];
      json.docs.every((work) => {
        if (saturatedAuthors.includes(authors)) {
          return false;
        }
        const authorName = work.author_name[0];
        if (authorCounts[authorName] <= authorMaxCounts[authorName]) {
          const id = work.editions.docs[0].key.split("/").slice(-1);
          const cover_i = work.editions.docs[0].cover_i;
          const image = cover_i
            ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
            : no_cover_found;
          const title = work.editions.docs[0].title;
          const price = 70;
          data.push({ id, title, image, authorName, price });
          authorCounts[authorName] += 1;
        } else if (!saturatedAuthors.includes(authorName)) {
          console.log(authorName);
          saturatedAuthors.push(authorName);
        }
        return true;
      });
      const shuffledData = data.sort(() => Math.random() - 0.5);
      setProductData(shuffledData);
    };
    fetchData();
  }, [loading]);
  if (loading) return <CardWrapper isLoading={true} />;
  if (error) {
    return <div className={styles.error}>
      <h2>{error}</h2>
      <button onClick={() => setLoading(true)}> Try Again</button>
    </div>
  }
};

export default Fetcher;
