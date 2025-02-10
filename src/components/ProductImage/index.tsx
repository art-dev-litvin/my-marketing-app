import { ProductStatus } from "@app/types/productFields";
import Image, { ImageProps } from "next/image";
import React from "react";

export interface ProductImageProps extends ImageProps {
  productStatus: ProductStatus;
  wrapperClassname?: string;
  statusClassname?: string;
}

export default function ProductImage({
  src,
  alt,
  productStatus,
  wrapperClassname,
  statusClassname,
  ...props
}: ProductImageProps) {
  const isOutOfStock = productStatus === ProductStatus.OutOfStack;

  return (
    <div className={`relative bg-white rounded-xl overflow-hidden ${wrapperClassname}`}>
      <Image
        fill
        src={src}
        alt={alt}
        className={`mb-4 object-cover ${isOutOfStock ? "opacity-35" : "opacity-100"}`}
        {...props}
      />
      {isOutOfStock && (
        <p
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-black ${statusClassname}`}>
          {productStatus}
        </p>
      )}
    </div>
  );
}
