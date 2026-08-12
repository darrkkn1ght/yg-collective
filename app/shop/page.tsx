import ProductShowcase from "@/app/components/ProductShowcase";
import PriceList from "@/app/components/PriceList";

export const metadata = {
  title: "Shop | YG Collective",
  description: "Shop the latest premium streetwear drops from YG Collective.",
};

export default function ShopPage() {
  return (
    <div className="pt-24">
      <ProductShowcase />
      <PriceList />
    </div>
  );
}
