import Header from "./header";
import { WorkExperiences } from "./experiences";
import { Technologies } from "./technologies";
import Educations from "./educations";
import { Certificates } from "./certificates";
import Interests from "./interests";
type TResumeProps = {
  data: TData;
};
export default function Resume(props: TResumeProps) {
  const {
    data: {
      intro,
      technologies,
      workExperiences,
      educations,
      certificates,
      interests,
    },
  } = props;
  return (
    <>
      <section
        id="resume"
        className="w-full h-fit bg-[#fff5ea] flex items-center justify-center py-8"
      >
        <div className="h-fit max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl flex flex-col items-center space-y-4">
          <Header intro={intro} />
          <Technologies technology={technologies} />
          <Educations education={educations} />
          <WorkExperiences workExperiences={workExperiences} />
          <Certificates certificate={certificates} />
          <Interests interests={interests} />
        </div>
      </section>
    </>
  );
}
