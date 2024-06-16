import { CardContainer } from "./card-container";

type TInterest = {
  interests: string[];
};

export default function Interests(props: TInterest) {
  const { interests } = props;
  return (
    <>
      <CardContainer title="interests">
        <ul className="list-disc pl-8">
          {interests.map((item: string, index) => {
            return (
              <li key={index}>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </CardContainer>
    </>
  );
}
