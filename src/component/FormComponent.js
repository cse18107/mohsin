import React from 'react'
import './FormComponent.css'
import Signup from './Signup'

const FormComponent = () => {
  return (
    <div className="form_component_container center-cus flex-column">
      <div className="top_section">
        <div className="sigin_button">SIGN IN</div>
      </div>
      <div className="bottom_section">
        {/* <form></form> */}
        <Signup />
      </div>
    </div>
  );
}

export default FormComponent