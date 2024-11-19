import Link from "next/link";
import ContactNumber from "@/components/ContactNumber";

export default function Contact() {
  return <div className="p-10">
    <h1>Página de contato</h1>
    <ContactNumber />
    <Link href="/" className="text-pink-400">Ir para página inicial</Link>
  </div>
}
