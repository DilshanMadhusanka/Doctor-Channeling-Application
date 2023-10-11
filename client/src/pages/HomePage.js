import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorList from "../components/DoctorList";
import Layout from "./../components/Layout";
import Image1 from "../assets/2.jpg"
import Image2 from "../assets/3.jpg"
import Image4 from "../assets/4.jpg"
import Image5 from "../assets/5.jpg"
import Image6 from "../assets/6.jpg"
import HeroCard from "../components/HeroCard";




const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <div>
        <div>
        <h3 className="mb-3 text-5xl font-bold text-left text-purple-700">E-Chanelling</h3>
        <p className="text-lg opacity-70">Discover a new way to connect with healthcare professionals and book appointments with ease. Whether you're seeking medical advice, dental care, mental health support, or holistic wellness services, our platform connects you with an array of healthcare experts, all from the comfort of your own home.</p>
        <p className="text-lg opacity-70">Discover a new way to connect with healthcare professionals and book appointments with ease. Whether you're seeking medical advice, dental care, mental health support, or holistic wellness services, our platform connects you with an array of healthcare experts, all from the comfort of your own home.</p>
        </div>
        <div className="flex justify-between gap-5 mt-14" > 
          <div className="w-1/3 ">
            <p className="text-lg opacity-70">
          Welcome to E Chanelling, your gateway to a healthier and more convenient future. Our hero page is your first step toward seamless and efficient healthcare access. We bring you a world of wellness at your fingertips.With our user-friendly interface, you can browse through a diverse range of healthcare providers, read reviews, and find the perfect fit for your needs. We prioritize your convenience, making healthcare accessible 24/7.
          
          </p>
            
          
          <button className="px-4 py-2 mt-4 text-xl text-white bg-purple-600 rounded-md hover:bg-purple-700 "> Apply Doctor</button>
          </div>
          <div className="w-2/3 "><img src={Image1} alt="Hero Image" className="w-[600px] rounded-xl" /></div>
        </div>

        <div className="flex justify-between gap-5 mt-20" > 
        <div className="w-2/3 "><img src={Image2} alt="Hero Image" className="w-[600px] rounded-xl" /></div>
          <div className="w-1/3 ">
            <p className="text-lg opacity-70">
          Welcome to E Chanelling, your gateway to a healthier and more convenient future. Our hero page is your first step toward seamless and efficient healthcare access. We bring you a world of wellness at your fingertips.With our user-friendly interface, you can browse through a diverse range of healthcare providers, read reviews, and find the perfect fit for your needs. We prioritize your convenience, making healthcare accessible 24/7.
          
          </p>
            
          
          <button className="px-4 py-2 mt-4 text-xl text-white bg-purple-600 rounded-md hover:bg-purple-700 "> 24 Hour service</button>
          </div>
         
        </div>

        <div className="flex gap-5 mt-24"> 
        <HeroCard imageLink = {Image4}/>
        <HeroCard imageLink = {Image5}/>
        <HeroCard imageLink = {Image6}/>
        </div>
        
      </div>
      <br/>
      
    </Layout>
  );
};

export default HomePage;