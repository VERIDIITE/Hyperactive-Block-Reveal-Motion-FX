import Image from "next/image";

export default function Gateway() {
  return (
    <>
      <section className="section-bg">
        <div>
          <Image
            src="/cps2.jpg"
            alt="Gateway background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="section-header">
          <h1>Gateway</h1>
        </div>
      </section>
    </>
  );
}
