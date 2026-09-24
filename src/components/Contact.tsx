import Section from "./Section";

export default function Contact() {
  return (
    <Section className="flex min-h-screen flex-col justify-between">
      <div>
        <p className="meta mb-8">03 / Contact</p>

        <h2 className="section-title">
          LET&apos;S MAKE
          <br />
          SOMETHING.
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <a
          href="mailto:hello@example.com"
          className="text-lg transition-opacity hover:opacity-60"
        >
          hello@example.com
        </a>

        <div className="flex gap-6">
          <a href="#" className="meta transition-opacity hover:opacity-60">
            LinkedIn ↗
          </a>

          <a href="#" className="meta transition-opacity hover:opacity-60">
            GitHub ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
