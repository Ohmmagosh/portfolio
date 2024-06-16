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
          {[email, phone, location].map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="text-center -order-1 lg:order-none">
          <Link href={"/"}>
            <h1 className="capitalize text-base md:text-3xl ">
              {name.toUpperCase()}
            </h1>
          </Link>
          <h2>({nickname.toUpperCase()})</h2>
        </div>
        <div className="text-left lg:text-right pl-4 md:pl-0">
          <Link href={github}>
            <p className="text-sm hover:underline">{github}</p>
          </Link>
          <Link href={website}>
            <p className="text-sm hover:underline">Ohmmagosh</p>
          </Link>
        </div>
      </header>
    </>
  );
}
