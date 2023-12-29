import { Hero } from "./components";
import { MainLayout } from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Fresh"
        subtitle="Obrt za kemijsko čišćenje"
        showLink
        linkText="Contact us"
        linkTo="/contact"
      />
    </MainLayout>
  );
}
