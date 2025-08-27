import React from "react";

function UserInfo() {
  const user = {
    name: "Vivek Singh",
    age: 25,
    dob: "1998-03-15",
    email: "vivek.singh@example.com",
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg text-center" style={{ width: "22rem" }}>
        {/* Bootstrap Icon instead of image */}
        <div className="mt-4">
          <i className="bi bi-person-circle" style={{ fontSize: "6rem", color: "#6c757d" }}></i>
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">📅 DOB: {user.dob}</p>
          <p className="card-text">🎂 Age: {user.age}</p>
          <p className="card-text">📧 {user.email}</p>
          <button className="btn btn-primary">Follow</button>
        </div>
      </div>
    </div>
  );
}


export default UserInfo;
