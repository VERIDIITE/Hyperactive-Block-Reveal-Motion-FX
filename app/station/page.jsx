import Image from "next/image";

export default function Station() {
  return (
    <>
      <section className="section-bg">
        <div>
          <Image
            src="/cps4.jpg"
            alt="Station background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="section-header">
          <h1>Station</h1>
        </div>
      </section>
    </>
  );
}
