import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="min-h-screen">
      <h2 className="text-6xl font-bold tracking-tighter">
        Preencha com as suas informações
      </h2>

      <ContactForm />
    </section>
  );
}
