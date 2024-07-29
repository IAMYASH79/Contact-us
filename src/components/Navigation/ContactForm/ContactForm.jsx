import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Rani");
  const [email, setEmail] = useState("test@gmail.com");
  const [text, setText] = useState("chala ja bsdk");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
      </div>

      <Button
        isOutline={true}
        text="VIA EMAIL FORM"
        icon={<FaPhoneAlt fontSize="24px" />}
      />

      <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="mail" name="email" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <input type="text" />
        </div>
        <Button text="Submit" />
        <div>{name + "  " + email + "  " + text}</div>
      </form>
      <div className={styles.contact_image}>
        <img src="/images/Service.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
