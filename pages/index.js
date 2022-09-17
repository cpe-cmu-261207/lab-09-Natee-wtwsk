import Link from "next/link";
import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
    return (
      <MainLayout>
        <div className="d-flex flex-wrap justify-content-evenly" style={{maxWidth:"750px", margin:"auto"}}>
          <img 
              src="/myself.png" 
              alt='"Test"' width="150" 
              height="150" 
              style={{objectFit:"cover", margin: "auto"}}
              className="rounded-circle p-3"
          />
          <div className="d-flex flex-column text-start">
            <h4>Natee Wittawatskul</h4>
            <p style={{maxWidth:"600px"}}>
              Hi, my name is Natee. 
              I study at Chianmai University. 
              I'm currently Study Computer Engineering. 
              This is my first website of CPE207. 
              It might not be beautiful but I'll try my best. 
              Hopefully. Also most of my own picture is 1MB or more so enjoy loading it.
            </p>
          </div>
        </div>
        <h5 style={{margin:"20px"}}>My Skills</h5>
        <div className="d-flex flex-wrap justify-content-evenly">
          <div className="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/code.png" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}}/>
            <div className="card-body">
              <h5 className="card-title">C++ Language</h5>
              <h6 className="card-subtitle mb-2 text-muted">By the way this is UPS-ESP32 code.</h6>
              <p className="card-text">I can write C++ language. Not that geat but it quite usable. Atleast it don't filled with bugs.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/328p.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}}/>
            <div className="card-body">
              <h5 className="card-title">Microcontroller</h5>
              <p className="card-text">In extended of C++. I have some basic knowledge of microcontroller enough to do some projects woth it.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/battery.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}}/>
            <div className="card-body">
              <h5 className="card-title">Battery Building</h5>
              <h6 className="card-subtitle mb-2 text-muted">This is 24VDC 600WHr LiFePO4 battery.</h6>
              <p className="card-text">With basic knowledge of electrical engineering and battery. I can build battery to the required battery specs.</p>
            </div>
          </div>
          <div className="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/3d-print.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}}/>
            <div className="card-body">
              <h5 className="card-title">3D Printing</h5>
              <h6 className="card-subtitle mb-2 text-muted">Also 3D Modeling</h6>
              <p className="card-text">For flexibility in my choice of projects, I can operate and maintenance 3D printer. I also have skill in 3D modeling to the required structure for printing.</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }