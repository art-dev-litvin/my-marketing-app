"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks/redux";
import { useFormik } from "formik";
import { selectProduct, setProduct } from "@app/store/slices/products";
import Button from "@app/components/Button";
import Input from "@app/components/Input";
import { useFetchProducts } from "@app/hooks/useFetchProducts";
import { useRouter } from "next/navigation";
import { Product } from "@app/types/product";
import { validationSchema } from "./validationSchema";
import Image from "next/image";

export interface EditProductFormProps {
  productId: number;
}

export default function EditProductForm({ productId }: EditProductFormProps) {
  useFetchProducts();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const product = useAppSelector(selectProduct(productId));

  const formik = useFormik({
    initialValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || "",
      category: product?.category || "",
      ingredients: product?.ingredients || [],
      discountPrice: product?.discountPrice || "",
      imageSrc: product?.imageSrc || "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!product) return;

      const updatedProduct: Product = {
        ...product,
        ...values,
        price: Number(values.price),
        discountPrice: Number(values.discountPrice) || undefined,
      };
      dispatch(setProduct(updatedProduct));
      router.push(`/products/${productId}`);
    },
  });

  const onCancel = () => router.push(`/products/${productId}`);
  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("imageSrc", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-12 text-white">
      <Button href={`/products/${productId}`} className="mb-4">
        Go back to product details
      </Button>
      <div className="flex gap-10">
        <div>
          <div className="relative overflow-hidden rounded-xl shrink-0 w-[500px] h-[700px] mb-4">
            {formik.values.imageSrc && (
              <Image fill src={formik.values.imageSrc} className="object-cover" alt={product.name} />
            )}
          </div>
          <Input className="mt-4" label="Choose image" name="imageSrc" type="file" onChange={onChangeImage} />
        </div>
        <div className="grow flex flex-col text-lg">
          <h1 className="text-4xl font-bold mb-6">Edit Product</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <Input
                label="Product Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
              />
            </div>

            <div className="mb-4">
              <Input
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && formik.errors.description}
              />
            </div>

            <div className="mb-4">
              <Input
                label="Price"
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && formik.errors.price}
              />
            </div>

            <div className="mb-4">
              <Input
                label="Discount Price"
                type="number"
                name="discountPrice"
                value={formik.values.discountPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.discountPrice && formik.errors.discountPrice}
              />
            </div>

            <div className="mb-4">
              <Input
                label="Category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && formik.errors.category}
              />
            </div>

            <div className="flex gap-3">
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
