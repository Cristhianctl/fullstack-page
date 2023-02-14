
export default function SenctionOne() {
  return (
    <section className="py-20  " >
      <h2 className="font-bold text-3xl text-center mb-4">
        Por que debes preferirnos</h2>
      <p className="text-center max-w-[500px] mx-auto mb-20 text-sm">
        Nuestros servicios estan pensados para brindarte seguridad calidad y un buen servivio a diferencia de otros, ademas de tener costos diferentes</p>
      <article className="flex gap-4 justify-center">
        <div className="bg-pink-200 p-4 rounded-lg">
          <h3 className="font-medium text-lg" >Servivios Tradicionales 🤔</h3>
          <p>❌ Poco atencion al detalle</p>
          <p>❌ Poco atencion al detalle</p>
          <p>❌ Poco atencion al detalle</p>
          <p>❌ Poco atencion al detalle</p>
          <img src="/assets/1.png" alt="podcast" />
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-medium text-lg">Servivios Tradicionales 😊</h3>
          <p>✅ Poco atencion al detalle</p>
          <p>✅ Poco atencion al detalle</p>
          <p>✅ Poco atencion al detalle</p>
          <p>✅ Poco atencion al detalle</p>
          <img src="/assets/production-artist.png" alt="podcast-one" />
        </div>
      </article>
    </section>
  )
}
