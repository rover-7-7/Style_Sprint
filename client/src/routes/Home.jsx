import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState();

  useEffect(() => {
    axios
      .get("https://style-sprint-backend.vercel.app/api/items")
      .then((res) => setFeaturedItems(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Landing />
      <FeaturedCategories />
      <FeaturedItems items={featuredItems} />
    </Fragment>
  );
};

export default Home;
