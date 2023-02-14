import { Button } from "./Hero";

export default function NavBar() {
  return (
    <nav className="flex bg-white w-full border-b border-b-gray-200 shadow-md max-w-3xl mx-auto items-center px-4 py-1"> 
      <img className="w-[40px] " 
        src="/assets/podcast.gif" alt="logo" />
        <p className="ml-2 font-semibold text-lg">Potcaster.com.pe</p>
      <div className="ml-auto flex items-center gap-6 " >
        <a className="font-semibold text-lg ">Servicios </a>
        <a className="font-semibold text-lg ">Oferta</a>
        <Button>¡Agenda Llamada!</Button>
      </div>
    </nav>
  )
};
