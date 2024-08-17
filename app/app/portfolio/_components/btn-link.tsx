import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { cn } from "@/lib/utils";

type TButtonLink = {
  label: string;
  asChild?: boolean;
  href: string;
  className?: string;
  disable?:boolean
};

export function ButtonLink(props: TButtonLink, ...rest: any) {
  const { label, className, href, disable } = props;
  return (
    <Button
      variant={"default"}
      className={cn(
        "text-2xl transform transition duration-500 hover:scale-150 text-white",
        className,
        {"line-through": disable},
      )}
    >
      <Link href={href} {...rest}>
        {label.toUpperCase()}
      </Link>
    </Button>
  );
}
