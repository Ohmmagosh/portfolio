import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TButtonLink = {
  label: string;
  asChild?: boolean;
  href: string;
  className?: string;
};

export function ButtonLink(props: TButtonLink, ...rest: any) {
  const { label, className, href } = props;
  return (
    <Button
      variant={"default"}
      className={cn(
        "text-2xl transform transition duration-500 hover:scale-150",
        className
      )}
    >
      <Link href={href} {...rest}>
        {label.toUpperCase()}
      </Link>
    </Button>
  );
}
