import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ExperienceTemplate, { type ExperienceData } from "@/components/ExperienceTemplate/ExperienceTemplate";

const DATA: ExperienceData = {
  key: "echoes",
  eyebrow: "03 / ECHOES",
  headline: "Discover the lives before this one.",
  heroBody:
    "Explore past life memories through guided regression sessions. Access knowledge, relationships, and experiences from your other lives.",
  artPending: "Monochrome figure in historic ruins, past-life landscape",
  midTitle: "Guided access to your past.",
  midBody:
    "Through a personalized process, Parallel helps you enter deep, receptive states, explore your memories, and document the lives you've lived before.",
  bullets: [
    "Personalized session guidance",
    "Multiple recollection techniques",
    "Document and reflect on experiences",
    "Integrate insights into your current life",
  ],
  closer: [
    { title: "Set your intention", body: "Focus your session with guided prompts." },
    { title: "Explore your memories", body: "Experience vivid, detailed recollections." },
    { title: "Document and reflect", body: "Capture insights and connect them to your present life." },
  ],
};

export default function Echoes() {
  return (
    <div>
      <Nav />
      <ExperienceTemplate data={DATA} />
      <Footer />
    </div>
  );
}
