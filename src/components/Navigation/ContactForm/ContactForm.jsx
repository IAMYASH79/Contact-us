import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
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

      <form action="">
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
      </form>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
