import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import styles from "./contactForm.module.scss";
import { ContactMail, Check, Close } from "@material-ui/icons";
import Card from "../UI/Card";
import useMessageSubmit from "../../hooks/useMessageSubmit";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schemas/form";

type Props = {};

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormState>({ resolver: yupResolver(formSchema) });

  const recaptchaKey = "6LdXUvUiAAAAAOAvpx6j8GWSjKdrp6A40BPECmGi";
  const recaptchaRef = useRef<any>();

  const { postSubmittedMessage, message: messageDisplayedOnSubmit } =
    useMessageSubmit({ payload: {} });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>();

  const submitButtonText = submitting ? "Sending message..." : "Send";

  const submitForm = async (data: FormState) => {
    const payload = { ...data, "g-recaptcha-response": recaptchaToken };
    setSubmitting(true);
    await postSubmittedMessage(payload);
    reset((data = { name: "", email: "", message: "" }));
    setSubmitting(false);
    recaptchaRef.current.reset();
  };

  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string);
  };

  return (
    <Card>
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <h1>
            <ContactMail className={styles.icon} />
            <span className={styles.header}>Contact</span>
          </h1>
          {messageDisplayedOnSubmit ? (
            <div className={messageDisplayedOnSubmit.className}>
              {messageDisplayedOnSubmit.className !== styles.error ? (
                <Check className={styles.check} fontSize={"medium"} />
              ) : (
                <Close className={styles.close} />
              )}
              {messageDisplayedOnSubmit.text}
            </div>
          ) : null}
          <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name")}
              />
              {errors.name ? (
                <p className={styles.errorMsg}>{errors.name?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@outlook.com"
                {...register("email")}
              />
              {errors.email ? (
                <p className={styles.errorMsg}>{errors.email?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="message">Message</label>
              <textarea id="message" {...register("message")}></textarea>
              {errors.message ? (
                <p className={styles.errorMsg}> {errors.message?.message}</p>
              ) : (
                ""
              )}
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
            ></ReCAPTCHA>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={Object.keys(errors).length ? true : false}
            >
              {submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default ContactForm;
