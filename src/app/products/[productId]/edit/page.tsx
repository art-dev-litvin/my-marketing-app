import EditProductForm from "@app/components/EditProductForm";
import { notFound } from "next/navigation";

interface EditProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const productId = Number((await params).productId);

  if (isNaN(productId)) return notFound();

  return <EditProductForm productId={productId} />;
}
