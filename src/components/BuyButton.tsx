"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

interface ButtonProps {
  name: string;
  price: string;
  platform: string;
  currency: string;
  quantity: string;
}

export const BuyButton: React.FC<ButtonProps> = ({
  name,
  price,
  platform,
  currency,
  quantity,
}) => {
  const route = useRouter();

  const handleButton = () => {
    window.fbq("track", "Beli", {
      name,
      price,
      platform,
      currency,
      quantity,
    });
    route.push("https://vt.tokopedia.com/t/ZSj8M6Y6w");
  };

  return (
    <Button onClick={handleButton} size={"lg"}>
      <ShoppingCartIcon strokeWidth={1.25} /> Beli Sekarang
    </Button>
  );
};
