import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 chars long"),
    size: yup
    .string()
    .oneOf(["small", "large", "extra_large"], "size is required"),
    pepperoni: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    spec: yup.string(),
});