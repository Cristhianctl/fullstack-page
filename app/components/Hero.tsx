export default function Hero() {
  return (
    <section className="flex">
      <div>
        <p className="uppercase text-xs underline decoration-blue-500 tracking-wider mb-4">Grabacion Porfecional</p>
        <h1 className=" text-3xl font-bold mb-4">Nosotros grabamaos tu podcast. Tu ocupate de tu <span className="text-blue-500">creatividad</span> </h1>
        <p className="text-gray-500 font-medium text-sm">mas de 1000 clientes satisrechos. deja esto en nuestras manos</p>
        <div className="flex">
          <div className="flex flex-col">
            <img src="/assets/people1.webp" alt="people-fil" />
            <span >⭐⭐⭐⭐⭐ <span>5.0</span> </span>
          </div>
          <span>de 3,000+ reviews</span>
        </div>
        <Button>
          ¡Agenda una Llamada!
        </Button>
        <img src="/assets/payment.webp" alt="payment" />
      </div>
      <video className="aspect-video max-w-[420px] rounded-md"
        muted
        loop
        autoPlay 
      src="/assets/video.mp4"></video>

    </section>
  )
};

export const Button = ({children}) =>{
  return(
    <button className="py-2 px-4 bg-blue-500 text-white rounded-full font-bold my-4 hover:bg-blue-600 transition-all active:scale-95" >
      {children}
    </button>
  )
};


