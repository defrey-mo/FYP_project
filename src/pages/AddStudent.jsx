import React from "react";
import "../CSS/add.css";

export default function AddStudent({ setAppTitle, setActivePage }) {
  setActivePage("add-student");

  return (
    <>
      <div className="main-form">
        <h1>Student Registration Form</h1>
        <div className="form">
          <form action="">
            <section>
              <fieldset>
                <legend>Basic Details</legend>

                <span>
                  <label for="student-id">Student Number</label>
                  <input
                    type="text"
                    name="student-id"
                    id="student-id"
                    required
                  />
                </span>

                <span>
                  <label for="first-name">FirstName:</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </span>

                <span>
                  <label for="middle-name">Middle Name:</label>
                  <input type="text" name="middle-name" id="middle-name" />
                </span>

                <span>
                  <label for="surname">Surname</label>
                  <input type="text" name="surname" id="surname" required />
                </span>

                <span>
                  <label for="dob">Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="dd/mm/yyyy"
                    required
                  />
                </span>

                <span>
                  <label for="gender">Gender:</label>
                  <select name="gender" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </span>
                                  
              
                <span>
                <fieldset>
                <legend className="medical">Medical Information</legend>
                <label for="medical-condition">
                    Pre-existing Medical Conditions if Any
                  </label>
                  <textarea
                  style={{maxWidth:"95%"}}
                    name="medical-condition"
                    id="medical-condition"
                    rows="10"
                  ></textarea>
                
              </fieldset>
              </span>
              </fieldset>

              {/* <fieldset>
                <legend>Medical Information</legend>
              </fieldset> */}
            </section>

            <aside>
              <fieldset>
                <legend>Guardian Contact Information</legend>
                <span>
                    <label for="guardian-phone">First Name</label>
                    <input
                      type="text"
                      name="emergency-phone"
                      id="emergency-phone"
                      required
                    />
                  </span>
                  <span>
                    <label for="emergency-phone">Last Name</label>
                    <input
                      type="text"
                      name="emergency-phone"
                      id="emergency-phone"
                      required
                    />
                  </span>
                <span>
                  <label for="phone-number">Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="07xxxxxxxx"
                    required
                  />
                </span>
                <span>
                  <label for="email">Email :</label>
                  <input type="email" name="email" id="email" required />
                </span>

                <span>
                  <label for="address">Home Address:</label>
                  <textarea name="address" id="address" rows="4" required></textarea>
                </span>
                
                <fieldset>
                  <legend>Previous school if any</legend>

                  <span>
                    <label for="emergency-name">School Name:</label>
                    <input
                      type="text"
                      name="emergency-name"
                      id="emergency-name"
                    />
                  </span>
                  
                </fieldset>
                <div className="registering-buttons">
                <div><button>Clear</button></div>
                <div><button>Save</button></div>
                </div>
              </fieldset>
            </aside>
          </form>
        </div>
      </div>
    </>
  );
}
