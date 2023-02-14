import Hero from "~/components/Hero";
import NavBar from "~/components/NavBar";
import SenctionOne from "~/components/SenctionOne";

export default function Index() {
  return (
    <>
      <NavBar />
      <main className="max-w-[720px] mx-auto py-20 ">
        <Hero />
        <SenctionOne/>
      </main>
      
    </>
  );
}
