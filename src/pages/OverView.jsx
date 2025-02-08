import React, { useEffect, useState } from "react";
import "../CSS/overview.css";

export default function OverView({ students, fetchStudents, setActivePage }) {
  setActivePage("overview");

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <table id="table">
        <thead>
          <tr>
            <th>Reg.No</th>
            <th>Full Name</th>
            <th>Telephone No.</th>
            <th>Guardian Names</th>
            <th>Telephone No.</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr>
                <td>1048</td>
                <td>Bwire O. Fredrick</td>
                <td>0773388119</td>
                <td>Michael Jordan</td>
                <td>0773388119</td>
                <td>Expelled for leading and inciting a strike</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
