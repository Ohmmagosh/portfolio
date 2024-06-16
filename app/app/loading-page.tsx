import { Loader2Icon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader2Icon size={64} className="animate-spin" />
    </div>
  );
}
