export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Product details {params.productId} page</div>;
}
