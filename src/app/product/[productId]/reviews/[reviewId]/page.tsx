import React from "react";
import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
}
