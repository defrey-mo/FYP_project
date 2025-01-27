import React from "react";
import "../CSS/check.css";

export default function CheckStudent({ setActivePage }) {
  setActivePage("check-student");

  return (
    <>
      <div class="checking">
        <h1 class="checkin">Check Student</h1>
        <form class="checking-form" action="">
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              Registration Number:
            </label>
            <input type="text" name="regno" id="regno" style={{marginLeft:'37px'}}/>
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              Full Names:
            </label>
            <input type="text" name="regno" id="regno" style={{marginLeft:'107px'}}/>
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              School Name:
            </label>
            <input type="text" name="regno" id="regno" style={{marginLeft:'90px'}} />
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              Fingerprint:
            </label>
            <input type="text" name="regno" id="regno" style={{marginLeft:'105px'}} />
          </div>
        </form>
        <button class="button-for-submit">Submit</button>
      </div>
    </>
  );
}
