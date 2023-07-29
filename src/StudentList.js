import React from "react";

const StudentList = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data to display.</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {data.map((student, index) => (
          <li key={index}>
            <strong>USN:</strong> {student.usn} <br />
            <strong>Name:</strong> {student.name} <br />
            <strong>Department:</strong> {student.department} <br />
            <strong>Time:</strong> {student.time} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
