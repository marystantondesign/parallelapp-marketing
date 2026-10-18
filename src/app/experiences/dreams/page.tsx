import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ExperienceTemplate, { type ExperienceData } from "@/components/ExperienceTemplate/ExperienceTemplate";

const DATA: ExperienceData = {
  key: "dreams",
  eyebrow: "02 / DREAMS",
  headline: "Go beyond the dream.",
  heroBody:
    "Revisit the dreams you've had and explore the worlds within them. Record, analyze, and return to your dreams with extraordinary clarity.",
  artPending: "Dreamlike cloudscape with a glowing doorway and figure",
  midTitle: "Your dreams. Real places.",
  midBody:
    "Your dreams are more than imagination. They're connections to neighboring realities. Parallel helps you record, understand, and revisit them.",
  bullets: [
    "Dream journaling and analysis",
    "Immersive dream revisits",
    "Recognize recurring locations",
    "Explore with guided tools",
  ],
  closer: [
    { title: "Record your dreams", body: "Capture with voice, text, or both." },
    { title: "Analyze and explore", body: "Uncover patterns, symbols, and possible meanings." },
    { title: "Revisit in rich sensory detail", body: "Step back into your dreams with greater clarity." },
  ],
};

export default function Dreams() {
  return (
    <div>
      <Nav />
      <ExperienceTemplate data={DATA} />
      <Footer />
    </div>
  );
}
