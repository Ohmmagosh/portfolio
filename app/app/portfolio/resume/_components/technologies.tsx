import { CardContainer } from "./card-container";

type TTechnologyProps = {
  technology: Technology[];
};

export function Technologies(props: TTechnologyProps) {
  const { technology } = props;
  return (
    <>
      <CardContainer title="technologies">
        <ul className="list-disc pl-8">
          {technology.map((item: Technology, index) => {
            return (
              <li key={index}>
                <div className="flex">
                  <h3 className="font-bold text-sm sm:text-base">
                    {item.section}
                  </h3>
                  &nbsp;
                  <p className="text-sm sm:text-base">{item.details}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContainer>
    </>
  );
}
