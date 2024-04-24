import React from "react";
import "./index.css";
import DropBox from "../components/dropdown/dropdown";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search for your destination..." />
    </form>
  );
};

const Home = () => {
  return (
    <div>
      <SearchBar />
      <DropBox title="Trip-type" options={["Round Trip", "One Way"]} />
    </div>
  );
};

export default Home;
