import Link from "next/link";

type THeaderProps = {
  intro: Intro;
};

export default function Header(props: THeaderProps) {
  const {
    intro: {
      name,
      nickname,
      phone,
      email,
      github,
      linkedin,
      location,
      website,
    },
  } = props;
  return (
    <>
      <header className="flex flex-col lg:flex-row w-full justify-between">
        <div className="text-sm text-left pl-4 md:pl-0">
          <p className="text-sm">{email}</p>
          <p className="text-sm">{phone}</p>
          <p className="text-sm">{location}</p>
        </div>
        <div className="text-center -order-1 lg:order-none">
          <h1 className="capitalize text-base md:text-3xl ">
            {name.toUpperCase()}
          </h1>
          <h2>({nickname.toUpperCase()})</h2>
        </div>
        <div className="text-left lg:text-right pl-4 md:pl-0">
          <Link href={github}>
            <p className="text-sm hover:underline">{github}</p>
          </Link>
        </div>
      </header>
    </>
  );
}
