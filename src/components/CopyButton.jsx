import React from "react";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function CopyButton({ toCopy, variant = "outline" }) {
  return (
    <Button
      variant={variant}
      size="icon"
      onClick={() => {
        navigator.clipboard.writeText(toCopy).then(() => {
          toast.success("Copiado al portapapeles");
        });
      }}
    >
      <Copy className="size-[1.2rem]" />
    </Button>
  );
}
