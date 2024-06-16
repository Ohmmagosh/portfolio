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
      <header className="flex w-full justify-between">
        <div className="text-sm text-left">
          <p className="text-sm">{email}</p>
          <p className="text-sm">{phone}</p>
          <p className="text-sm">{location}</p>
        </div>
        <div className="text-center">
          <h1 className="capitalize text-base md:text-3xl ">
            {name.toUpperCase()}
          </h1>
          <h2>({nickname.toUpperCase()})</h2>
        </div>
        <div className="text-right">
          <Link href={github}>
            <p className="text-sm hover:underline">{github}</p>
          </Link>
        </div>
      </header>
    </>
  );
}
