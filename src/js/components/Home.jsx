import React from "react";
import NavBar from "./NavBar";
import Container from "./Container"
import CardList from "./CardList"
import Footer from "./Footer";
import WelcomeBox from "./WelcomeBox";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Container />
			<Footer />
		</>
	);
};

export default Home;

