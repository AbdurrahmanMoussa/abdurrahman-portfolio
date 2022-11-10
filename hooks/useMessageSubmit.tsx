import { useState } from "react";
import styles from "../components/Contact/contactForm.module.scss";

type Props = { payload?: {} };

type ServiceMessage = {
  text: string;
  className?: string;
};

const useMessageSubmit = ({}: Props) => {
  const formId = "NDpHd3zt";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const [message, setMessage] = useState<ServiceMessage>();

  const postSubmittedMessage = async (payload: {}) => {
    try {
      const req = await fetch(formSparkUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const response = await req.json();

      setMessage({
        className: styles.success,
        text: "Message sent successfully! I will get back to you as soon as possible.",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
      setMessage({
        className: styles.error,
        text: "Sorry, there was an error sending your message.",
      });
    }
  };

  return {
    postSubmittedMessage,
    message,
  };
};

export default useMessageSubmit;
