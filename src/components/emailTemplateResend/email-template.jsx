import * as React from "react";

export const EmailTemplate = ({ FullName,Phone }) => (
<div>
    
    <p><strong>My Name is : </strong>{FullName}</p>
    
    <p >You&apos;ve received a message from contact interested in your services:  </p>
      <div>
        <p><strong>Name : </strong> {FullName}</p>
        <p><strong>Phone Number : </strong> {Phone}</p> 
      </div>
  </div>
);
