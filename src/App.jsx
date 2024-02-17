import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';

const App = () => {
  let data = [
    {
      image:"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww",
      title:"Full Stack Development",
      content: "Studying full stack development equips you with the skills to build both the front-end (what users see and interact with) and the back-end (the server-side logic and database) of websites or applications. It provides a holistic understanding of web development, empowering you to create complete, functional, and dynamic digital experiences from start to finish.",
      date:"14",
      month:"February"
    },
    { 
      image:"https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_640.png",
      title:"Full Stack Development",
      content: "Studying full stack development equips you with the skills to build both the front-end (what users see and interact with) and the back-end (the server-side logic and database) of websites or applications. It provides a holistic understanding of web development, empowering you to create complete, functional, and dynamic digital experiences from start to finish.",
      date:"13",
      month:"February"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg",
      title:"Data Science",
      content: "Studying data science enables you to harness the power of data to extract valuable insights and make informed decisions. It involves acquiring skills in statistics, programming, and machine learning to analyze and interpret data, uncover patterns, and drive innovation across various industries.",
      date:"04",
      month:"February"
    },
    {
      image:"https://plus.unsplash.com/premium_photo-1673688152102-b24caa6e8725?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      title:"Data Science",
      content: "Studying data science enables you to harness the power of data to extract valuable insights and make informed decisions. It involves acquiring skills in statistics, programming, and machine learning to analyze and interpret data, uncover patterns, and drive innovation across various industries.",
      date:"06",
      month:"February"
    },
    {
      image:"https://cdn.pixabay.com/photo/2018/06/19/10/01/internet-3484137_1280.jpg",
      title:"Cyber Security",
      content: "Studying cybersecurity equips you with the knowledge and skills to protect digital assets, networks, and systems from cyber threats. It involves understanding security protocols, identifying vulnerabilities, and implementing measures to mitigate risks, ensuring the confidentiality, integrity, and availability of information.",
      date:"14",
      month:"February"
    },
    {
      image:"https://images.unsplash.com/photo-1533709752211-118fcaf03312?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
      title:"Cyber Security",
      content: "Studying cybersecurity equips you with the knowledge and skills to protect digital assets, networks, and systems from cyber threats. It involves understanding security protocols, identifying vulnerabilities, and implementing measures to mitigate risks, ensuring the confidentiality, integrity, and availability of information.",
      date:"24",
      month:"February"
    },
    {
      image:"https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
      title:"Career",
      content: "UI/UX design focuses on creating intuitive and engaging digital experiences for users. It involves understanding user behavior, conducting research, and applying design principles to craft visually appealing and functional interfaces. Mastery in UI/UX encompasses skills in wireframing, prototyping, user testing, and creating responsive designs that prioritize accessibility and usability across different devices and platforms.",
      date:"14",
      month:"February"
    },
    {
      image:"https://cdn.pixabay.com/photo/2019/10/24/15/33/stairs-4574579_640.jpg",
      title:"Career",
      content: "Mastering JavaScript involves delving deep into the language's intricacies and advanced concepts to build robust, efficient, and scalable web applications. This includes understanding asynchronous programming, closures, prototypal inheritance, and modern ES6+ features. Additionally, proficiency in frameworks and libraries like React, Angular, or Vue.js is essential for developing dynamic and interactive user interfaces.",
      date:"07",
      month:"February"
    },
    
  ]
  return (
    <div>
      <h1 className='text-center'>React Router</h1>
      <BrowserRouter>
      <div>
          <NavBar />
        </div>
      <Routes>
        <Route path='/' element={<All data = {data} />}/>
        <Route path='/fullstack' element={<FullStack data={data} />}/>
        <Route path='/datascience' element={<DataScience data={data} />}/>
        <Route path='/cybersecurity' element={<CyberSecurity data={data} />}/>
        <Route path='/career' element={<Career data={data} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;