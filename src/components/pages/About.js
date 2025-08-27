import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="text-success">About Us 🌟</h2>
          <p className="mt-3">
            We are passionate developers focused on creating user-friendly,
            responsive, and interactive applications. Our mission is to make
            learning and development easier with modern web technologies.
          </p>
          <ul className="list-group mt-3 shadow-sm">
            <li className="list-group-item">⚡ Fast & Responsive</li>
            <li className="list-group-item">🎨 Attractive UI</li>
            <li className="list-group-item">🚀 Built with React + Bootstrap</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img 
  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
  alt="Developer Team" 
  className="img-fluid rounded shadow"
/>
        </div>
      </div>
    </div>
  );
}

export default About;
