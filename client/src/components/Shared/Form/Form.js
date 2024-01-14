import React, { useState } from "react";
import KinputType from "./KinputType";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hospitalName, setHospitalName] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {/*switch statement*/}

        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <KinputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <KinputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <KinputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <KinputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <KinputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"Text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <KinputType
                    labelText={"Organisation Name"}
                    labelFor={"forOrganisationName"}
                    inputType={"Text"}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />

                  <KinputType
                    labelText={"Hospital Name"}
                    labelFor={"forHospitalName"}
                    inputType={"Text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />

                  <KinputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"Text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <KinputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"Text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <KinputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"Text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
