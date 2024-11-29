import React from "react";
import "./ComplianceReview.css";

function ComplianceReview() {
  return (
    <div className="compliance-review">
      <h2>Compliance Review</h2>
      <ul>
        <li className="pass">✔ Logo Placement: Correct</li>
        <li className="fail">✘ Font Size: Too Small</li>
        <li className="pass">✔ File Format: Approved</li>
      </ul>
    </div>
  );
}

export default ComplianceReview;
