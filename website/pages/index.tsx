import type { NextPage } from "next";
import HomePage from "../components/Homepage/Homepage";
import PageComponent from "../components/PageComponent";

const Home: NextPage = () => {
    return (<PageComponent pageId="home" Component={<HomePage />} />);
};

export default Home;
