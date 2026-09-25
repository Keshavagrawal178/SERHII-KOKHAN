import Section from "./Section";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <Section className="flex min-h-screen items-center">
      <Reveal>
        <div className="max-w-6xl">
          <p className="meta mb-8">01 / INTRO</p>

          <h2 className="section-title">
            I BUILD DIGITAL
            <br />
            EXPERIENCES.
          </h2>
        </div>
      </Reveal>
    </Section>
  );
}
