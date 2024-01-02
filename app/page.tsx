import { Hero } from "../components";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Fresh"
        subtitle="Kemijska praonica tepiha"
        showLink
        linkText="Kontaktirajte nas"
        linkTo="/kontakt"
        section="hero"
      />
    </MainLayout>
  );
}
