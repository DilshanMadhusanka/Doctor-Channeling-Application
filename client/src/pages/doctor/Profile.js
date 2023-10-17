import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import Layout from "./../../components/Layout";
import Image11 from "./../../assets/11.png"


const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // update doc ==========
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const starttime = values.starttime.format("HH:mm");
      const endtime = values.endtime.format("HH:mm");
      const res = await axios.post(
        "/api/doctor/updateProfile",
        {
          ...values,
          userId: user._id,
          starttime,
          endtime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong ");
    }
  };
  // update doc ==========

  //getDOc Details
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout >
      <h3 className="text-2xl font-bold text-purple-700"   align="center ">Manage Profile</h3>
      {doctor && (
        <Form
          layout="vertical"
          onFinish={handleFinish}
          className="m-3"
          initialValues={{
            ...doctor,
            starttime: moment(doctor.starttime, "HH:mm"),
            endtime: moment(doctor.endtime, "HH:mm")
          }}
        >
          <h4 className="font-bold mb-9">Personal Details : </h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Last Name"
                name="lastName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Phone No"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item label="Website" name="website">
                <Input type="text" placeholder="Website" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Address"
                name="address"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Clinic Address" />
              </Form.Item>
            </Col>
          </Row>
          <h4 className="font-bold mb-9 mt-9">Professional Details :</h4>
          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Specialization"
                name="specialization"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Specialization" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Experience"
                name="experience"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Experience" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Fees Per Consultation"
                name="feesPerConsultation"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Fee" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
            <Form.Item
              name="starttime"
              label="Start Time"
              rules={[{ required: true }]}
            >
              <TimePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              name="endtime"
              label="End Time"
              rules={[{ required: true }]}
            >
              <TimePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
              
             
            </Col>
          </Row>
        </Form>
      )}


<div className="mt-20"><img src={Image11} alt="banner image" className="w-[2500px] rounded-xl" /></div>
      
    </Layout>
  );
};

export default Profile;
