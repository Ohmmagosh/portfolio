import LoadingPage from "@/app/loading-page";
import { Suspense } from "react";
import Resume from "./_components/resume";
import { promises as fs } from "fs";

export default async function ResumePage() {
  const file = await fs.readFile(
    process.cwd() + "/app/static/data/profile.json",
    "utf8"
  );
  const data: TData = JSON.parse(file);
  return (
    <Suspense fallback={<LoadingPage />}>
      <Resume data={data} />
    </Suspense>
  );
}
