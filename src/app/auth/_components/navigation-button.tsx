"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavigatioButton() {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }
  
  return (
    <Button
      className="absolute top-5 left-5"
      variant="outline"
      onClick={handleGoBack}
    >
      <ArrowLeft className="size-4" />
      Go Back
    </Button>
  );
}
