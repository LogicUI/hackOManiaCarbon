import React, { useState } from "react";
import { Button } from "antd";
import CompanyPanel from "./CompanyPanel/CompanyPanel";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompareScreen from "./chartScreens/CompareScreen/CompareScreen";
import EcoLogo from './Images/EcoLogo.png';
import SearchIcon from './Images/SearchIcon.png';

import "./App.css";

function App() {
  const [shouldShow, setShouldShow] = useState(true);
  const [mockData, setMockData] = useState([
    {
      name: "Company A",
      footPrintPerProduction: 4000,
      carbonFootPrintPerRevenue: 2400,
      carbonFootPrintPerEmployee: 2400,
    },
    {
      name: "Company B",
      footPrintPerProduction: 3000,
      carbonFootPrintPerRevenue: 1398,
      carbonFootPrintPerEmployee: 2210,
    },
    {
      name: "Company C",
      footPrintPerProduction: 2000,
      carbonFootPrintPerRevenue: 9800,
      carbonFootPrintPerEmployee: 2290,
    },
    {
      name: "Company D",
      footPrintPerProduction: 2780,
      carbonFootPrintPerRevenue: 3908,
      carbonFootPrintPerEmployee: 2000,
    },
    {
      name: "Company E",
      footPrintPerProduction: 1890,
      carbonFootPrintPerRevenue: 4800,
      carbonFootPrintPerEmployee: 2181,
    },
    {
      name: "Company F",
      footPrintPerProduction: 2390,
      carbonFootPrintPerRevenue: 3800,
      carbonFootPrintPerEmployee: 2500,
    },
    // {
    //   name: "Company G",
    //   footPrintPerProduction: 3490,
    //   carbonFootPrintPerRevenue: 4300,
    //   carbonFootPrintPerEmployee: 2100,
    // },
  ]);
  const [listOfCompanies, setListOfCompanies] = useState([
    {
      companyName: "Company A",
      selected: true,
    },
    {
      companyName: "Company B",
      selected: true,
    },
    {
      companyName: "Company C",
      selected: true,
    },
    {
      companyName: "Company D",
      selected: true,
    },
    {
      companyName: "Company E",
      selected: true,
    },
    {
      companyName: "Company F",
      selected: true,
    },
    // {
    //   companyName: "Company G",
    //   selected: true,
    // },
  ]);

  const [buttonView, setListOfButtonView] = useState([
    "Overview",
    "GHG Emissions",
    "Compare",
  ]);
  const [selectedButton, setSelectedButton] = useState("Overview");

  const onCompanyClick = (companyName) => {
    const copiedCompanies = [...listOfCompanies];
    const companyToFind = copiedCompanies.find(
      (company) => company.companyName === companyName
    );
    companyToFind.selected = !companyToFind.selected;
    setListOfCompanies(copiedCompanies);
  };

  return (
    <>

      <Router>
        <Routes>
        <Route path="/Home" element={<Home />} />
        </Routes>
        </Router>
        <div style={{
              width: "100vw",
              height: "10vh",
          }}>
        <div style={{
              marginTop: "25px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
          }}>
        <img style={{
              height: "50px",
          }} src={EcoLogo} alt="Eco Logo" />
        <div style={{
              backgroundColor: '#EAEAEA',
              width: "80vw",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
          }}>
            <h3 style={{ marginLeft: '25px', color: 'B4B4B4', fontFamily: 'Raleway, sans-serif', fontWeight: "400", fontSize: "13px" }}>What company do you want to check?</h3>
            <img style={{
              height: "30px",
              marginRight: '25px'
          }} src={SearchIcon} alt="Search Icon" />
          </div>
          
        </div>
      </div>
      <div
        style={{
          width: "25%",
          height: "8vh",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "80px",
          marginTop: "10px"
        }}
      >
        {buttonView.map((button) => (
          <Button
          shape="round" 
            onClick={() => setSelectedButton(button)}
            style={{
              color: selectedButton === button ? "white" : "",
              background: selectedButton === button ? "#5C5C5C" : "#E6E6E6",
              height: "40px",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontFamily: 'Poppins, sans-serif', fontWeight: "400", fontSize: "13px"
            }}
          >
            {button}
          </Button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "75vh"
        }}
      >
        <CompareScreen
          onCompanyClick={onCompanyClick}
          listOfCompanies={listOfCompanies}
          mockData={mockData}
        />
        <div
          style={{
            background: "#F2F2F2",
            width: "25%",
            // padding: "30px",
            display: "flex",
            // marginTop: "30px",
            borderRadius: "5%",
            flexDirection: "column",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            marginLeft: "20px",
            height: "75vh"
          }}
        >
          <CompanyPanel
            companylist={listOfCompanies}
            onCompanyClick={onCompanyClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
