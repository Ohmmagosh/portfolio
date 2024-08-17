import { ButtonLink } from "./btn-link";
import { Suspense } from "react";
import LoadingPage from "@/app/loading-page";

type TConfigUrls = {
  [key: string]: { href: string; label: string, disable?: boolean };
};

const configUrls: TConfigUrls = {
  profile: { href: "/portfolio/profile", label: "Profile", disable: true},
  resume: { href: "/portfolio/resume", label: "Resume" },
  projects: { href: "/portfolio/projects", label: "Projects", disable: true },
  github: { href: "https://github.com/Ohmmagosh", label: "Github" },
};

export default function Portfolio() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="flex flex-col items-center justify-center md:inline-flex">
          {Object.keys(configUrls).map((key) => {
            return (
              <ButtonLink
                key={key}
                href={configUrls[key].href}
                label={configUrls[key].label}
                disable={configUrls[key].disable}
              />
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
