import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Button } from "rebass";

export default function Basic({ data }) {
  return (
    <div
      className="vh-100"
      style={{
        border: "2px solid white",
        borderRadius: "12px",
        padding: "18px",
      }}
    >
      {data.map((student, index) => (
        <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-center">
                  <div
                    className="mt-3 mb-4"
                    style={{ backgroundColor: "white", borderRadius: "12px" }}
                  >
                    <MDBCardImage
                      src="https://cdn.discordapp.com/attachments/1121100423818907739/1134027557168238712/absurd.design_-_Chapter_1_-_05.png"
                      className="rounded-circle"
                      fluid
                      style={{ width: "100px" }}
                    />
                  </div>
                  <MDBTypography tag="h4">{student.name}</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    Department of {student.department}
                  </MDBCardText>
                  <MDBCardText className="small text-muted mb-0">
                    {student.usn}
                  </MDBCardText>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <MDBCardText className="small text-muted mb-0">
                        Total Score:
                      </MDBCardText>
                      <MDBCardText className="mb-1 h5">69</MDBCardText>
                    </div>
                    <div>
                      <Button style={{ color: "black" }}>Reward Student</Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ))}
    </div>
  );
}
