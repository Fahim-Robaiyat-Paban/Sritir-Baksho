"use client";
import { useRouter } from "next/navigation";
import { IdCard } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCardStore } from "@/lib/store/useCardStore";

// Sets this game as the favourite on the card draft, then opens the maker
const AddToCardButton = ({ gameName }) => {
  const router = useRouter();
  const setField = useCardStore((state) => state.setField);

  const handleClick = async () => {
    await useCardStore.persist.rehydrate();
    setField("game", gameName);
    router.push("/card");
  };

  return (
    <Button onClick={handleClick} className="w-full">
      <IdCard aria-hidden="true" className="size-[18px]" />
      কার্ডে প্রিয় খেলা হিসেবে যোগ করুন
    </Button>
  );
};

export default AddToCardButton;
