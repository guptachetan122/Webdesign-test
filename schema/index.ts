import * as Yup from "yup";
import { passSchema } from "../utils/passwordValidation";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("email is not valid")
    .label("email")
    .required("please enter your email"),
  password: Yup.string()
    .label("password")
    .required("please enter your password"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("email is not valid")
    .label("email")
    .required("please enter your email"),
});

export const resetPasswordSchema = Yup.object().shape({
  emailOtp: Yup.string()
    .label("email otp")
    .required("please enter otp sent over email"),
  newPassword: Yup.string()
    .required("password is empty")
    .min(8, "Must be 8 characters or more")
    .max(128, "Must be 128 characters max")
    .test(
      "is-strong",
      "New password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character, no spaces",
      (value) => passSchema.validate(value)
    ),

  newPasswordConfirm: Yup.string()
    .label("password")
    .required("please confirm your password")
    .oneOf([Yup.ref("newPassword"), null], "passwords must match"),
});

export const slotQuestionSchema = Yup.object().shape({
  question: Yup.string()
    .label("question")
    .required("please enter your question"),
});

export const editProfileSchema = Yup.object().shape({
  name: Yup.string()
    .label("name")
    .min(3)
    .max(32)
    .required("please enter your name"),
  headline: Yup.string()
    .label("headline")
    .min(5)
    .max(64)
    .required("please enter a headline"),
  workplace: Yup.string()
    .label("workplace")
    .min(2)
    .max(32)
    .required("please enter your workplace"),
  city: Yup.string()
    .label("city")
    .min(2)
    .max(64)
    .required("please enter your city"),
});

export const editIntroductionSchema = Yup.object().shape({
  introduction: Yup.string()
    .label("introduction")
    .required("please enter a introduction"),
});

export const editHeroSchema = Yup.object().shape({
  hero: Yup.string().label("hero").required("please enter your hero"),
});

export const editFeaturedLinksSchema = Yup.object().shape({
  links: Yup.array().label("links").required("please enter a link"),
});

export const editAdmiredCompaniesSchema = Yup.object().shape({
  company: Yup.string().label("company").required("please enter a company"),
});

export const editExperienceSchema = Yup.object().shape({
  experience: Yup.string()
    .required()
    .oneOf([
      "0 - 3 years",
      "3 - 6 years",
      "6 - 9 years",
      "9 - 12 years",
      "12 - 15 years",
      "15 - 18 years",
      "18 years and above",
    ]),
});

export const editEducationSchema = Yup.object().shape({
  gradSchool: Yup.string().label("gradSchool"),
  college: Yup.string().label("college"),
});

export const clubhouseSchema = Yup.object().shape({
  name: Yup.string().label("name").required("please enter clubhouse name"),
  description: Yup.string()
    .label("description")
    .required("please enter clubhouse description"),
  isPublic: Yup.boolean()
    .label("isPublic")
    .required("please select clubhouse type"),
});

export const featuredLinksSchema = Yup.object().shape({
  featuredLinks: Yup.array().of(
    Yup.string().url("invalid url").required("url can't be empty")
  ),
});
