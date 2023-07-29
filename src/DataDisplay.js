import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Card, Flex, Heading, Text } from "rebass";
import { Input } from "@rebass/forms";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./App.css";
import Basic from "./Basic";

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    // Fetch the data from the API using axios (Replace 'apiUrl' with the actual API endpoint)
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=hoZdF9q2_1Bp64Vkg9jeZS1i5zxohvxAi5C5k-ANeuWwjFpJpr5JTgz79919kml0x_Mg_InspmFtCiH335jYVSguGG8oZBDkm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGA7L2LWdTuxhS1rq0QFqr_o6E9NBwPz8nVTIrMcwxEozD5utA57mI2eA0qOv6s2ERMVoBd6PFKt-hKB8zI1JspJdaU-6S-Dvw&lib=MmJX-JwsP3N7VOPt-QC53ZXXtad7F4Vk4"
      )
      .then((response) => {
        console.log("API Response:", response.data); // Check the API response in the console
        setData(response.data.data); // Assuming the data is available as 'data' property in the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter and count the data based on the entered search ID
    const groupedData = data.reduce((acc, item) => {
      if (!acc[item.usn]) {
        acc[item.usn] = { ...item, count: 1 };
      } else {
        acc[item.usn].count++;
      }
      return acc;
    }, {});
    const filtered = Object.values(groupedData).filter(
      (item) => item.usn === searchId
    );

    console.log("Filtered Data:", filtered); // Check the filtered data in the console
    setFilteredData(filtered);
  }, [searchId, data]);

  const handleSearchChange = (event) => {
    const inputId = event.target.value;
    setSearchId(inputId);

    if (!inputId) {
      setFilteredData(data); // Reset to all data when the search bar is empty
    } else {
      const filtered = data.filter(
        (item) => item.usn.toLowerCase() === inputId.toLowerCase()
      );
      console.log("Filtered Data:", filtered); // Check the filtered data in the console
      setFilteredData(filtered);
    }
  };

  return (
    <Box p={4}>
      <Input
        className="input-bar"
        id="usn-input"
        type="text"
        placeholder="Enter USN to search"
        value={searchId}
        onChange={handleSearchChange}
      />
      <Flex flexWrap="wrap">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <MDBContainer className="container py-5 h-1000 card-container">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="12" xl="4">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="text-center">
                      <div
                        className="mt-3 mb-4"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "12px",
                        }}
                      >
                        <MDBCardImage
                          src="https://cdn.discordapp.com/attachments/1121100423818907739/1134027557168238712/absurd.design_-_Chapter_1_-_05.png"
                          className="rounded-circle"
                          fluid
                          style={{ width: "100px" }}
                        />
                      </div>
                      <MDBTypography tag="h4">{item.name}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                        Department of {item.department}
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        {item.usn}
                      </MDBCardText>
                      <div className="d-flex justify-content-between text-center mt-5 mb-2">
                        <div>
                          <MDBCardText className="small text-muted mb-0">
                            Total Score: {filteredData.length}
                          </MDBCardText>
                        </div>
                        <div>
                          <Button style={{ color: "black" }}>
                            Reward Student
                          </Button>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            // <Card key={index} width={250} m={2} p={3} className="card">
            //   <Heading fontSize={2}>{item.name}</Heading>
            //   <Text>
            //     <strong>USN:</strong> {item.usn}
            //   </Text>
            //   <Text>
            //     <strong>Time:</strong> {item.time}
            //   </Text>
            //   <Text>
            //     <strong>Department:</strong> {item.department}
            //   </Text>
            //   <Text>
            //     <strong>Count:</strong> {item.count}
            //   </Text>
            // </Card>
          ))
        ) : (
          <div className="no-result">
            <Text>Enter the USN Properly.</Text>
          </div>
        )}
      </Flex>
    </Box>
  );
};

export default DataDisplay;
