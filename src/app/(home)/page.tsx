import { ContactSection } from "./sections/contact";
import { ConfirmationDrawer } from "./sections/contact-confirmation";
import { HeroSection } from "./sections/hero";

export default function Page() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 p-4"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/XHD8d.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroSection />
      <ContactSection />

      <ConfirmationDrawer />
    </div>
  );
}
