import Link from "next/link";

type TComingSoonProps = {
  href?: string;
};

export async function ComingSoon(props: TComingSoonProps) {
  const { href = "/" } = props;
  return (
    <Link
      href={href}
      className=" w-screen h-screen flex items-center justify-center bg-black"
    >
      <div className="flex max-w-max max-h-max">
        <p className="text-5xl text-white w-full h-full">Coming soon....</p>
        <span className=" w-4 bg-yellow-300  relative inline-block before:-skew-y-3 before:block before:absolute before:-inset-1 animate-ping"></span>
      </div>
    </Link>
  );
}
