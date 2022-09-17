import Link from "next/link";
import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function experience() {
    return (
      <MainLayout>
        <h5 style={{margin: "20px"}}>(My Own)Projects Experience</h5>
        <div class="d-flex flex-wrap justify-content-evenly" style={{alignItems:"center"}}>
          <div class="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/proj1.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}} />
            <div class="card-body">
              <h5 class="card-title">Battery Spot Welder</h5>
              <p class="card-text">This is my first project that have potential to kill me. It's the DIY spot welder. First used for making my own LiFePO4 motorcycle battery.</p>
            </div>
          </div>
          <div class="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/proj2.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}} />
            <div class="card-body">
              <h5 class="card-title">3D Printer Enclosure</h5>
              <p class="card-text">Next is 3D printer enclosure. It's purpose is to help control air temperature in order to prints ABS. It have 2 intake fans, filament dryer and air filtration build into it.</p>
            </div>
          </div>
          <div class="card shadow-sm mb-5 bg-white rounded" style={{width:"18rem"}}>
            <img src="/proj3.jpg" className="card-img-top" height="250" style={{objectFit:"cover", margin: "auto"}} />
            <div class="card-body">
              <h5 class="card-title">UPS</h5>
              <p class="card-text">And this is my current project. It's UPS with 2000Watt of continuous 220VAC output power. 2 out of 4 batteries can be use as Ebike battery.</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }