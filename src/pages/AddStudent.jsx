import React, { useState } from "react";
import "../CSS/add.css";
import axios from "axios";

export default function AddStudent({ setAppTitle, setActivePage }) {
  setActivePage("add-student");

  const randNum = Math.floor(Math.random() * 100000);

  const [reg_no, setreg_no] = useState("STUD-" + randNum);
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [guardian_name, setguardian_name] = useState("");
  const [medical_info, setmedical_info] = useState("");
  const [gender, setgender] = useState("male");
  const [dob, setdob] = useState("");
  const [phone, setphone] = useState("");
  const [home_address, sethome_address] = useState("");
  const [prev_school, setprev_school] = useState("");

  /*  {

} */

  function clearBtn(e) {
    e.preventDefault();

    //setreg_no("");
    setfirstname("");
    setmiddlename("");
    setlastname("");
    setemail("");
    setguardian_name("");
    setmedical_info("");
    setgender("");
    setdob("");
    setphone("");
    sethome_address("");
    setprev_school("");
  }

  async function createStudentSubmit(e) {
    e.preventDefault();

    const student = {
      student_id: reg_no,
      reg_no: "SCH-" + randNum,
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      fullname: firstname + " " + lastname,
      email: email,
      guardian_name: guardian_name,
      medical_info: medical_info,
      gender: gender,
      dob: dob,
      phone: phone,
      home_address: home_address,
      status: "",
      prev_school: prev_school,
      registered: false,
      cases: "",
    };

    let headersList = {
      Accept: "*/*",
      //"User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: "http://localhost:3001/students",
      method: "POST",
      headers: headersList,
      data: student,
      maxBodyLength: Infinity,
    };

    await axios
      .request(reqOptions)
      .then((response) => console.log(response.data));

    //console.log(student);
  }

  return (
    <>
      <div className="main-form">
        <h1>Student Registration Form</h1>
        <div className="form">
          <form onSubmit={createStudentSubmit}>
            <section>
              <fieldset>
                <legend>Basic Details</legend>

                <span>
                  <label for="student-id">Student Number</label>
                  <input
                    disabled
                    onChange={(e) => setreg_no(e.target.value)}
                    value={reg_no}
                    type="text"
                    name="student-id"
                    id="student-id"
                    required
                  />
                </span>

                <span>
                  <label for="first-name">FirstName</label>
                  <input
                    onChange={(e) => setfirstname(e.target.value)}
                    value={firstname}
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </span>

                <span>
                  <label for="middle-name">Middle Name</label>
                  <input
                    onChange={(e) => setmiddlename(e.target.value)}
                    value={middlename}
                    type="text"
                    name="middle-name"
                    id="middle-name"
                  />
                </span>

                <span>
                  <label for="surname">Surname</label>
                  <input
                    onChange={(e) => setlastname(e.target.value)}
                    value={lastname}
                    type="text"
                    name="surname"
                    id="surname"
                    required
                  />
                </span>

                <span>
                  <label for="dob">Date of Birth</label>
                  <input
                    onChange={(e) => setdob(e.target.value)}
                    value={dob}
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="dd/mm/yyyy"
                    required
                  />
                </span>

                <span>
                  <label for="gender">Gender</label>
                  <select
                    onChange={(e) => setgender(e.target.value)}
                    value={gender}
                    name="gender"
                    id="gender"
                  >
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
                      onChange={(e) => setmedical_info(e.target.value)}
                      value={medical_info}
                      style={{ maxWidth: "95%" }}
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
                    onChange={(e) => setguardian_name(e.target.value)}
                    value={guardian_name}
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                    required
                  />
                </span>
                {/* <span>
                  <label for="emergency-phone">Last Name</label>
                  <input
                  
                    type="text"
                    name="emergency-phone"
                    id="emergency-phone"
                    required
                  />
                </span> */}
                <span>
                  <label for="phone-number">Phone Number</label>
                  <input
                    onChange={(e) => setphone(e.target.value)}
                    value={phone}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="07xxxxxxxx"
                    required
                  />
                </span>
                <span>
                  <label for="email">Email </label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </span>

                <span>
                  <label for="address">Home Address</label>
                  <textarea
                    onChange={(e) => sethome_address(e.target.value)}
                    value={home_address}
                    name="address"
                    id="address"
                    rows="4"
                    required
                  ></textarea>
                </span>

                <fieldset>
                  <legend>Previous school if any</legend>

                  <span>
                    <label for="emergency-name">School Name</label>
                    <input
                      onChange={(e) => setprev_school(e.target.value)}
                      value={prev_school}
                      type="text"
                      name="emergency-name"
                      id="emergency-name"
                    />
                  </span>
                </fieldset>
                <div className="registering-buttons">
                  <div>
                    <button onClick={clearBtn} type="reset">
                      Clear
                    </button>
                  </div>
                  <div className="save">
                    <button>Save</button>
                  </div>
                </div>
              </fieldset>
            </aside>
          </form>
        </div>
      </div>
    </>
  );
}
