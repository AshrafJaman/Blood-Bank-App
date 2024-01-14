import React from "react";
import KinputType from "../../components/Shared/Form/KinputType";

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <form>
            <KinputType
              labelText={"Email"}
              labelFor={"forEmail"}
              inputType={"email"}
              name={"email"}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

//form js files
