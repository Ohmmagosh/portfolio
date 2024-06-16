import { CardContainer } from "./card-container";

type TEducationProps = {
  education: Education[];
};

export default function Educations(props: TEducationProps) {
  const { education } = props;
  return (
    <>
      <CardContainer title="educations">
        <ul className="list-disc pl-8">
          {education.map((item: Education, index) => {
            return (
              <li key={index}>
                <div className="">
                  <h3>{item.head}</h3>
                  <p>{item.details}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContainer>
    </>
  );
}
