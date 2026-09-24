import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section className="min-h-screen">
      <Reveal>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="meta mb-8">02 / About</p>

            <h2 className="section-title">
              FRONTEND
              <br />
              DEVELOPER
            </h2>
          </div>

          <div className="max-w-lg self-end">
            <p className="body-text">
              I create thoughtful interfaces and interactive digital experiences
              for the web.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-y-6">
              <div>
                <p className="meta mb-2">Focus</p>
                <p className="text-sm">Frontend Development</p>
              </div>

              <div>
                <p className="meta mb-2">Stack</p>
                <p className="text-sm">React / Next.js</p>
              </div>

              <div>
                <p className="meta mb-2">Experience</p>
                <p className="text-sm">5+ Years</p>
              </div>

              <div>
                <p className="meta mb-2">Availability</p>
                <p className="text-sm">Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
