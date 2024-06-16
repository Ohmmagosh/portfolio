import { CardContainer } from "./card-container";
import JobCard from "./job-card";

type TWorkExperienceProps = {
  workExperiences: WorkExperience[];
};

export function WorkExperiences(props: TWorkExperienceProps) {
  const { workExperiences } = props;
  return (
    <>
      <CardContainer title="work exprerience">
        {workExperiences.map((item, index) => {
          const { position, company, url, years, details } = item;
          return (
            <JobCard
              key={index}
              position={position}
              company={company}
              url={url}
              years={years}
              details={details}
            />
          );
        })}
      </CardContainer>
    </>
  );
}
