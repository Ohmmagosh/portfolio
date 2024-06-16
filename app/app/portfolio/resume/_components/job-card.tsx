import Link from "next/link";
type TJobCardProps = {
  position: string;
  company: string;
  url?: string;
  years: [string, string];
  details: string[];
};

export default function JobCard(props: TJobCardProps) {
  const { position, company, url, years, details } = props;

  return (
    <>
      <section id="Job Card" className=" w-full flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{position}</h3>
          <h3 className="text-xl font-bold">
            <Link href={url ? url : "/profile/resume"}>{company}</Link>
          </h3>
          <div className="flex text-xl font-bold">
            <h3>{years[0]}</h3>&nbsp;-&nbsp;
            <h3>{years[1]}</h3>
            <h3></h3>
          </div>
        </div>
        <ul className="pl-8">
          {details.map((item, index) => {
            return (
              <li key={index} className="text-base list-disc">
                {item}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
