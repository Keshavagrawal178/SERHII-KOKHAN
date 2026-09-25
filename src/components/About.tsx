import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" className="min-h-screen">
      <Reveal>
        <div className="grid gap-16 md:grid-cols-2">
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
              I build interactive web experiences with a focus on thoughtful
              interfaces, modern frontend technologies, and 3D on the web.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-y-8">
              <div>
                <p className="meta mb-3">Focus</p>
                <p className="text-sm">Frontend & Interactive Web</p>
              </div>

              <div>
                <p className="meta mb-3">Stack</p>
                <p className="text-sm">React / Next.js / JavaScript</p>
              </div>

              <div>
                <p className="meta mb-3">Experience</p>
                <p className="text-sm">9+ Years</p>
              </div>

              <div>
                <p className="meta mb-3">Based</p>
                <p className="text-sm">Ukraine</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
