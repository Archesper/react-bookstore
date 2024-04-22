import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import heroBackground from "../../assets/images/hero-background.jpg";
import TextCarousel from "../TextCarousel/TextCarousel";
import EastIcon from "@mui/icons-material/East";

const Hero = () => {
  console.log(heroBackground);
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h1 className={styles["hero-header"]}>Mock Bookstore</h1>
        <TextCarousel
          paragraphs={[
            "This site is a React.js practice project intended to be a fake frontend for an online bookstore. Practiced concepts include API fetching and client-side routing among others.",
            'The "fake" book data is generated through the <a href="https://openlibrary.org/developers/api">OpenLibrary API</a>, by fetching a random amount of books from a hardcoded list of authors. Check out the <a href="#">source code here!</a>',
            "This project is part of <a href=\"https://www.theodinproject.com/\">The Odin Project's curriculum</a>. It's the last project of their React lesson.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.",
          ]}
        />
        <button className={styles.button}>
          Shop Now <EastIcon />
        </button>
      </div>
    </div>
  );
};

export default Hero;
