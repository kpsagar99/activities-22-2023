import axios from "axios";
import { useState, useEffect } from "react";
let POST_URL = "http://localhost:8089/api/customer/store";
export function Registration() {
  let [customer_id, setCustId] = useState("");
  let [firstname, setfName] = useState("");
  let [email, setEmail] = useState("");
  let [lastname, setlName] = useState("");
  let [password, setPassword] = useState("");
  let [phone, setPhone] = useState("");
  let [pan, setPan] = useState("");
  let [message, setMessage] = useState(""); //to show success message

  let store = (e) => {
    e.preventDefault();
    //axios calls for HTTP POST - write thsi after creating the form
    axios
      .post(POST_URL, {
        firstname: firstname,
        lastname: lastname,
        pan: pan,
        email: email,
        password: password,
        phone: phone,
      })
      .then((r) => {
        setCustId(r.data.customer_id);
        setMessage(`Profile stored with an id: ${r.data.customer_id}`);
        setfName("");
        setlName("");
        setPassword("");
        setPhone("");
        setEmail("");
        setPan("");
      })
      .catch((err) => setMessage(`Error Occured: ${err}`));
  };
  let valueReset = (e) => {
    setfName("");
    setlName("");
    setPassword("");
    setPhone("");
    setEmail("");
    setPan("");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register Here</h2>
      <br />
      <form>
        <div className="container-fluid">
          <div className="w-25">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Email Id"
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div className="w-25">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              placeholder="First Name"
              onChange={(e) => setfName(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div className="w-25">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setlName(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div className="w-25">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              placeholder="PAN"
              onChange={(e) => setPan(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div className="w-25">
            <input
              type="password"
              autoComplete="off"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div className="w-25">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              style={{ marginLeft: 480 }}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Register"
              className="btn btn-success"
              style={{ marginLeft: 550, width: 180 }}
            ></input>
          </div>
          <br />
          <div className="text-center">
            {message != "" ? <p className="text-danger">{message}</p> : <p></p>}
          </div>
        </div>
      </form>
    </div>
  );
}
