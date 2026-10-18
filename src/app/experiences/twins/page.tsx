import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import ExperienceTemplate, { type ExperienceData } from "@/components/ExperienceTemplate/ExperienceTemplate";

const DATA: ExperienceData = {
  key: "twins",
  eyebrow: "01 / TWINS",
  headline: "Meet the other you.",
  heroBody:
    "Connect with verified versions of yourself in neighboring realities. Have real conversations, share experiences, and gain new perspectives on your life.",
  cornerLabel: "TWO REALITIES. ONE YOU.",
  artPending: "Duotone portrait, two mirrored profiles — one natural, one cobalt",
  midTitle: "Real conversations. Different perspectives.",
  midBody:
    "Talk, text, or video chat with your alternate selves. Compare experiences, ask different questions, and see how small changes can lead to entirely different paths.",
  bullets: [
    "Verified identity matching",
    "Text, voice, and video communication",
    "Share experiences and insights",
    "Learn from different life choices",
  ],
  closer: [
    { title: "Identity verification", body: "How we match you with verified versions of yourself." },
    { title: "Conversation experience", body: "A seamless, natural way to stay connected." },
    { title: "Multiple media options", body: "Text, audio, video, and shared media." },
  ],
};

export default function Twins() {
  return (
    <div>
      <Nav />
      <ExperienceTemplate data={DATA} />
      <Footer />
    </div>
  );
}
