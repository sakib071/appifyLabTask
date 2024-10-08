import BannerBG from "../Banner/BannerBG";
import PopularCourses from "../PopulerCourses/PopularCourses";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import Testimonials from "../Testimonial/Testimonial";
import Work from "../Work/Work";
import SectiionThree from "./SectionThree/SectiionThree";

const Home = () => {


    return (
        <div>
            <BannerBG></BannerBG>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectiionThree></SectiionThree>
            <PopularCourses></PopularCourses>
            <Testimonials></Testimonials>
            <Work></Work>
        </div>
    );
};

export default Home;
