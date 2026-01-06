import Image from "next/image";

export default function Colony() {
  return (
    <>
      <section className="section-bg">
        <div>
          <Image
            src="/cps3.jpg"
            alt="Colony background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="section-header">
          <h1>Colony</h1>
        </div>
      </section>
    </>
  );
}
