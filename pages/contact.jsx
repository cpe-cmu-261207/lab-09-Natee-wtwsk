import Link from "next/link";
import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function Navbar() {
    return (
        <MainLayout>
            <h5 style={{margin: "20px"}}>Contact Me</h5>
              <div class="text-start d-flex justify-content-evenly" style={{margin:"20px", alignItems:"center"}}>
                <div class="d-flex flex-row flex-wrap">
                  <img 
                      src="/myself.png" 
                      alt='"Test"' width="250" 
                      height="250" 
                      style={{objectFit:"cover", margin: "auto"}}
                      class="rounded-circle p-3"
                  />
                  <table class="table table-borderless" style={{maxWidth:"500px"}}>
                    <tr>
                      <th scope="row">Name</th>
                      <td>Natee Wittawatskul</td>
                    </tr>
                    <tr>
                      <th scope="row">Nickname</th>
                      <td>New</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>127 Soi7 Moo14 Kiang Mor 1 Mueang Chiang Mai Chiang Mai Thailand 50200</td>
                    </tr>
                    <tr>
                      <th scope="row">Facebook</th>
                      <td>
                        <a 
                          href="https://www.facebook.com/profile.php?id=100004436957568" 
                          style={{textDecoration:"none"}}
                          rel="noreferrer"
                        >Natee Wittawatskul</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td><a href="mailto:mr.natee_wit@cmu.ac.th">mr.natee_wit@cmu.ac.th</a></td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>097-134-4775</td>
                    </tr>
                    <tr>
                      <th scope="row">Career</th>
                      <td>University Student</td>
                    </tr>
                  </table>
                </div>
              </div>
        </MainLayout>
    );
  }