import React, { useContext, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import swal from 'sweetalert'
import loading from '../../gif/loading.gif'
import { useRef } from "react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef()
  const [value, setvalue] = useState({ from_name: '', from_email: '', message: '' });
  const [load, setload] = useState(false);
  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  }
  const sendEmail = async (e) => {
    e.preventDefault();
    setload(true);
    const email = await emailjs.sendForm("service_90poqdu", "template_w11ktya", form.current, "ROc9ugRqxe7aQJa95");
    if (email.status === 200) {
      swal("Thank you!", "We Will Reply You As soon As Possible!", "success");
      setload(false)
      setvalue({ from_name: '', from_email: '', message: '' })
    }
    else {
      swal("Sorry :(", "Please Try Again Letter", "warning");
      setload(false)
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={sendEmail} ref={form} >
          <input type="text" name="from_name" className="user" placeholder="Name" value={value.from_name} onChange={handleChange} required={true} />
          <input type="email" name="from_email" className="user" placeholder="Email" value={value.from_email} onChange={handleChange} required={true} />
          <textarea name="message" className="user" placeholder="Message" value={value.message} onChange={handleChange} required={true} />
          <input type="submit" value="Submit" className="button" />
          <span className="loading">{load ? <img src={loading} alt="" /> : ''}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
