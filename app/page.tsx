import { Hero } from "../components";
import { MainLayout } from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Hero
        title="Fresh"
        subtitle="Kemijska praonica tepiha"
        showLink
        linkText="Contact us"
        linkTo="/contact"
      />
    </MainLayout>
  );
}
