import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="flex min-h-screen flex-col justify-between"
    >
      <div>
        <p className="meta mb-8">04 / Contact</p>

        <h2 className="section-title">
          LET&apos;S MAKE
          <br />
          SOMETHING.
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <span className="text-lg">Let&apos;s work together ↗</span>

        <div className="flex gap-6">
          <span className="meta">LinkedIn ↗</span>
          <span className="meta">GitHub ↗</span>
        </div>
      </div>
    </Section>
  );
}
