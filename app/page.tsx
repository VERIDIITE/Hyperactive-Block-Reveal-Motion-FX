import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="section-bg">
        <div>
          <Image
            src="/cps.jpg"
            alt="Homebase background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="section-header">
          <h1>Homebase</h1>
        </div>
      </section>
    </>
  );
}
