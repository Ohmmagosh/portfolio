import Portfolio from "./_components/portfolio";

export default async function PortfolioPage() {
  return (
    <>
      <main className="sm:flex justify-center items-center min-h-screen content-center p-24 bg-slate-900">
        <Portfolio />
      </main>
    </>
  );
}
