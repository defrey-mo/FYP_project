import React from "react";
import '../CSS/add.css';

export default function AddStudent({ setAppTitle,setActivePage }) {
  setActivePage("add-student")


  return (
   <>
    <div className="main-form">
    <h1>Student Registration Form</h1>
      <div className="form">
        <form action="">
          <fieldset>
            <legend>Basic Details</legend>
            <label for="first-name">FirstName:</label>
            <input type="text" name="first-name" id="first-name" required />
            <label for="middle-name">Middle Name:</label>
            <input type="text" name="middle-name" id="middle-name" />
            <label for="surname">Surname</label>
            <input type="text" name="surname" id="surname" required />
            <label for="dob">Date of Birth:</label>
            <input type="date" name="dob" id="dob" placeholder="dd/mm/yyyy" required/>
            <label for="gender">Gender:</label>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Contact Information</legend>
            <label for="phone-number">Phone Number:</label>
            <input type="tel" name="phone" id="phone" placeholder="07xxxxxxxx" required/>
            <label for="email">Email :</label>
            <input type="email" name="email" id="email" required />
            <label for="address">Home Address:</label>
            <textarea name="address" id="address" rows="4"></textarea>
          </fieldset>
          <fieldset>
            <legend>Identification Details</legend>
            <label for="lin">Learner Identification Number:</label>
            <input type="text" name="lin" id="lin" required />
            <label for="student-id">Student ID</label>
            <input type="text" name="student-id" id="student-id" required />
            <label for="fingerprint">Upload Fingerprint</label>
            <input type="file" name="fingerprint" id="fingerprint" accept="image/*" required/>
          </fieldset>
          <fieldset>
            <legend>Emergency Contact</legend>
            <label for="emergency-name">Contact Name:</label>
            <input type="text" name="emergency-name" id="emergency-name" required/>
            <label for="emergency-phone">Contact Phone Number</label>
            <input type="text" name="emergency-phone" id="emergency-phone" required/>
          </fieldset>
          <fieldset>
            <legend>Medical Information</legend>
            <label for="medical-condition">Pre-existing Medical Conditions if Any</label>
            <textarea name="medical-condition" id="medical-condition" rows="10"></textarea>
          </fieldset>
          <button className="submit" type="submit">Register Student</button>
        </form>
    </div>
    </div>
   </>
  )
}
