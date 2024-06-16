import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type CardContainerProps = {
  title: string;
  children: React.ReactNode;
};

export function CardContainer(props: CardContainerProps) {
  const { title, children } = props;
  return (
    <>
      <section
        id={cn("card-container", title)}
        className="w-full flex flex-col space-y-2"
      >
        <h2 className="sm:text-2xl font-bold">{title.toUpperCase()}</h2>
        <Separator className="border border-black w-full bg-border items-center" />
        {children}
      </section>
    </>
  );
}
