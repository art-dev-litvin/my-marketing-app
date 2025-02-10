import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").positive("Price must be positive"),
  category: Yup.string().required("Category is required"),
  ingredients: Yup.array()
    .of(Yup.string().required("Ingredient is required"))
    .required("Ingredients are required"),
  discountPrice: Yup.number().positive("Discount price must be positive").nullable(),
});
