import { CardContainer } from "./card-container";
type TCertificateProps = {
  certificate: Certificate[];
};

export function Certificates(props: TCertificateProps) {
  const { certificate } = props;
  return (
    <>
      <CardContainer title="certificates">
        <ul className="list-disc pl-8 text-sm sm:text-base">
          {certificate.map((item: Certificate, index) => {
            return (
              <li key={index}>
                <div className="flex">
                  <p className="">{item.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContainer>
    </>
  );
}
