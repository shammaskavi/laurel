import React from "react";
import DataDisplay from "./DataDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <center>
        <img
          className="Header-img"
          src="https://cdn.discordapp.com/attachments/1121100423818907739/1134483528688603227/google-form_header.png"
          alt="Laurel shit"
          height={200}
        />
        <DataDisplay />
      </center>
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import StudentList from "./StudentList"; // Adjust the path to the actual file location

// const StudentCard = ({ student }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "10px",
//         margin: "10px",
//         borderRadius: "5px",
//       }}
//     >
//       <strong>USN:</strong> {student.usn} <br />
//       <strong>Name:</strong> {student.name} <br />
//       <strong>Department:</strong> {student.department} <br />
//       <strong>Time:</strong> {student.time} <br />
//     </div>
//   );
// };

// const App = () => {
//   const [data, setData] = useState([]);

//   // Fetch data from the API
//   useEffect(() => {
//     axios
//       .get(
//         "https://script.googleusercontent.com/macros/echo?user_content_key=hoZdF9q2_1Bp64Vkg9jeZS1i5zxohvxAi5C5k-ANeuWwjFpJpr5JTgz79919kml0x_Mg_InspmFtCiH335jYVSguGG8oZBDkm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGA7L2LWdTuxhS1rq0QFqr_o6E9NBwPz8nVTIrMcwxEozD5utA57mI2eA0qOv6s2ERMVoBd6PFKt-hKB8zI1JspJdaU-6S-Dvw&lib=MmJX-JwsP3N7VOPt-QC53ZXXtad7F4Vk4"
//       )
//       .then((response) => {
//         setData(response.data.data); // Assuming the API response has the same data structure as you provided
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Student Information</h1>
//       <div>
//         {data.map((student, index) => (
//           <StudentCard key={index} student={student} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
