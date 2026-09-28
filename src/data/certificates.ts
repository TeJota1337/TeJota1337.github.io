export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google · Coursera",
    date: "2024-05",
    image: "/certificates/coursera-2.png",
    verifyUrl: "https://coursera.org/verify/MZS5UHLLPN77",
  },
  {
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google · Coursera",
    date: "2024-08",
    image: "/certificates/coursera-1.png",
    verifyUrl: "https://coursera.org/verify/2VJIU0KLLV29",
  },
  {
    title: "Build Wireframes and Low-Fidelity Prototypes",
    issuer: "Google · Coursera",
    date: "2024-10",
    image: "/certificates/coursera-3.png",
    verifyUrl: "https://coursera.org/verify/Z2VNORB442N4",
  },
  {
    title: "Unity Essentials Pathway",
    issuer: "Unity Technologies",
    date: "2024-10",
    image: "/certificates/unity-essentials.png",
    verifyUrl: "https://www.credly.com/go/AHtCATVT",
  },
  {
    title: "Unity Creative Core",
    issuer: "Unity Technologies",
    date: "2025-01",
    image: "/certificates/unity-creative-core.png",
    verifyUrl: "https://www.credly.com/go/EFJHRc16",
  },
  {
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2024-05",
    image: "/certificates/endpoint-security.png",
  },
];
