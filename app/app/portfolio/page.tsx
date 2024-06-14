import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default async function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      {/* <Card className="w-96 h-96 bg-cyan-500 flex justify-center items-center rounded-md shadow-2xl shadow-cyan-500/50 " >
        <Label className="text-3xl text-slate-100">Portfolio</Label>
      </Card> */}
      <div>
        <span className="shadow-2xl shadow-2xl shadow-custom rounded-md animate-pulse absolute w-96 h-96"></span>
        <Card className="w-96 h-96 relative bg-cyan-500 flex justify-center items-center rounded-md animate-wiggle ease ">
          <Label className="text-3xl text-slate-100">Portfolio</Label>
        </Card>
      </div>
    </main>
  );
}
