import { object, string, TypeOf } from "yup";

export const formSchema = object({
  name: string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: string().email("Invalid email").required("Email is required"),
  message: string().required("Message is required"),
});

export type FormSchema = TypeOf<typeof formSchema>;
