import { useContext, useState } from "react";
import { AuthContext } from "../../Component/Providers/AuthProvider";
import Banner from "../../Component/Header/Banner";
import Testimonial from "./Testimonial";
import BrandTypes from "./BrandTypes";
import { useLoaderData } from "react-router-dom";
import HomeOffer from "./HomeOffer";

const Home = () => {
    const authInfo = useContext(AuthContext);
    const brandLoadedData = useLoaderData();
    // const [brands, setBrands] = useState(brandLoadedData);
    console.log(brandLoadedData);
    return (
        <div>
            <Banner></Banner>
            <BrandTypes brandLoadedData={brandLoadedData}></BrandTypes>
            <HomeOffer></HomeOffer>
            <Testimonial></Testimonial>


        </div>
    );
};

export default Home;