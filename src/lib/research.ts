export type Paper = {
  slug: string;
  id: string;
  date: string;
  year: string;
  title: string;
  authors: string[];
  authorsExtra: number;
  affiliation: string;
  field: string;
  keywords: string[];
  doi: string;
  tags: string[];
  thumb: "waves" | "ring" | "stars";
  abstract: string;
  methodology: string;
  findings: string;
  discussion: string;
};

export const PAPERS: Paper[] = [
  {
    slug: "vcl-2019-004",
    id: "VCL-2019-004",
    date: "June 2019",
    year: "2019",
    title: "Stabilized information transfer across adjacent reality states",
    authors: ["Dr. Elena Park", "Dr. Marcus Chen", "Dr. Amina Rao"],
    authorsExtra: 2,
    affiliation: "Vera Continuum Laboratories",
    field: "Quantum Physics",
    keywords: ["Relay arrays", "Information transfer", "Adjacent reality states", "Quantum entanglement"],
    doi: "10.5281/vcl.2019.004",
    tags: ["Consciousness", "Quantum Physics", "Information Theory"],
    thumb: "waves",
    abstract:
      "We demonstrate a stable method for transferring information between adjacent reality states using entangled relay arrays. Our results show high-fidelity transmission with minimal decoherence.",
    methodology:
      "Each trial paired two relay arrays — one anchored to our own reality state, one tuned to an adjacent branch — and held them in entangled resonance for the duration of the transfer window. Signal fidelity was measured against a divergence coefficient derived from the time elapsed since the two branches separated. Two hundred and forty transfer windows were recorded across twelve candidate branches, with relay power held constant and divergence age varied.",
    findings:
      "Fidelity falls predictably with the age of the divergence, and the resulting coefficient is measurable to within two percent. We found no upper bound on the number of branches that could be addressed in sequence, and no measurable effect of the act of addressing a branch on that branch's subsequent state.",
    discussion:
      "The coefficient this method measures is a property of how far two branches have drifted apart — not a measure of compatibility or similarity between them. This is the basis for the classification reported to consumers of the Twins product: a match percentage describes divergence, not resemblance. The absence of an addressing effect suggests the boundary can be crossed routinely, with sufficient relay power, without disturbing what lies on the other side.",
  },
  {
    slug: "vcl-2023-017",
    id: "VCL-2023-017",
    date: "March 2023",
    year: "2023",
    title: "Hypnotic induction protocols for recollective sessions",
    authors: ["Dr. Amina Rao", "Dr. Halcyon Voss", "Dr. Priya Nair"],
    authorsExtra: 3,
    affiliation: "Vera Continuum Laboratories",
    field: "Consciousness Studies",
    keywords: ["Induction protocols", "Recollective states", "Cross-reality recall", "Session safety"],
    doi: "10.5281/vcl.2023.017",
    tags: ["Consciousness", "Neural Interfaces", "Clinical Research"],
    thumb: "ring",
    abstract:
      "We present standardized induction protocols for accessing recollective states, with measurable increases in cross-reality recall accuracy. Includes safety guidelines and session parameters.",
    methodology:
      "Protocols combined timed tonal sequences with calibrated light pulses, delivered through the relay's client device rather than the array itself, since recollective states do not require network coverage. Sessions were run across four induction variants, each tested against a control group receiving no induction, and recall accuracy was scored against independently recorded prior entries where available.",
    findings:
      "All four induction variants produced a measurable increase in cross-reality recall accuracy over the control group, with the strongest variant combining descending tonal frequency with slow, warm-toned light. Roughly one in four candidate subjects were excluded at screening on safety grounds, most commonly a history of photosensitive seizure.",
    discussion:
      "Because induction lowers the boundary along the path described by a subject's own prior account, it cannot manufacture a destination — only return a subject to one they have already reached. The screening protocol that excludes roughly a quarter of candidates is not a product limitation; it is a precondition the consumer application enforces before any recollective session is offered.",
  },
  {
    slug: "vcl-2025-002",
    id: "VCL-2025-002",
    date: "January 2025",
    year: "2025",
    title: "Relay array siting and regional coverage density",
    authors: ["Continuum Network Engineering"],
    authorsExtra: 0,
    affiliation: "Vera Continuum Laboratories",
    field: "Infrastructure",
    keywords: ["Relay siting", "Coverage density", "Network expansion", "Regional modeling"],
    doi: "10.5281/vcl.2025.002",
    tags: ["Relay Networks", "Infrastructure", "Global Coverage"],
    thumb: "stars",
    abstract:
      "We analyze optimal siting strategies for relay arrays and model coverage density across global regions. Results inform the next phase of the Continuum Network expansion.",
    methodology:
      "We modeled the effective radius of a single array as a function of transmit power, terrain, and local matter density, then simulated pairwise interference between arrays sited at varying distances to derive a minimum safe spacing. The model was validated against telemetry from the existing array deployment and used to project coverage under three expansion budgets.",
    findings:
      "Coverage density is bounded by the minimum spacing requirement, not by budget alone: beyond a certain array density, additional arrays reduce rather than extend effective coverage. Metropolitan siting achieves the highest density at the lowest marginal cost; rural coverage requires either higher-power arrays or longer acceptable latency.",
    discussion:
      "Because coverage is governed by this spacing constraint, the Network cannot simply be bought into existence everywhere at once. We publish the siting model in full so that coverage claims can be checked independently against the published map, and so that it is clear why a connection outside the modeled range is refused rather than degraded.",
  },
];

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((paper) => paper.slug === slug);
}

export const RESEARCH_TOPICS = ["All", "Consciousness", "Quantum Physics", "Relay Networks", "Identity Verification"];
