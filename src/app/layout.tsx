import type { Metadata } from "next";
import { Aboreto, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const aboretoSans = Aboreto({
  weight: ["400"],
  variable: "--font-aboreto",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Jéssica Rodrigues - Psicóloga Clínica e Terapeuta Cognitivo-Comportamental",
    template: "%s | Jéssica Rodrigues",
  },
  description:
    "Psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Atendimentos presenciais e online para adolescentes, adultos e casais. Promovendo autoconhecimento, equilíbrio emocional e bem-estar psicológico.",
  authors: [{ name: "Jéssica Rodrigues", url: "https://seudominio.com" }],
  creator: "Jéssica Rodrigues",
  publisher: "Jéssica Rodrigues",
  metadataBase: new URL("https://seudominio.com"),
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Jéssica Rodrigues",
    "Psicóloga",
    "Psicóloga Clínica",
    "Psicóloga Online",
    "Terapia Cognitivo-Comportamental",
    "TCC",
    "Terapia Online",
    "Saúde Mental",
    "Psicoterapia",
    "Atendimento Psicológico",
    "Terapia Individual",
    "Psicologia",
    "Ansiedade",
    "Depressão",
    "Autoconhecimento",
    "Equilíbrio Emocional",
    "Terapia para Casais",
    "Psicóloga em Belo Horizonte",
    "Psicóloga para adolescentes",
    "Psicóloga para adultos",
  ],
  openGraph: {
    title:
      "Jéssica Rodrigues - Psicóloga Clínica e Terapeuta Cognitivo-Comportamental",
    description:
      "Psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC). Atendimento humanizado e acolhedor adultos — online.",
    url: "https://seudominio.com",
    siteName: "Jéssica Rodrigues Psicóloga",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "health",
  classification: "Psicologia Clínica",
  applicationName: "Jéssica Rodrigues - Psicóloga",
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${sourceSans.variable} ${aboretoSans.variable} antialiased`}
      >
        <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  );
}
