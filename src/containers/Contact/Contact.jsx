import React, { useState } from "react";

const Contact = (props) => {
  const [currentView, setCurrentView] = useState("form");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // API CALL
    // WAIT FOR THE CALL TO RESOLVE
    // INSIDE .THEN, I WANT TO CONFIRM
    // REDIRECT TO THE HOMEPAGE
    // props.history.push("/about");
    setCurrentView("confirmation");
  };

  return (
    <div>
      <h1>This is my contact page. </h1>
      {currentView === "form" && (
        <button className="btn btn-primary" onClick={handleSubmitForm}>
          Submit Form
        </button>
      )}

      {currentView === "confirmation" && (
        <>
          <h1>Thanks for submitting the form!</h1>
        </>
      )}
    </div>
  );
};

export default Contact;
