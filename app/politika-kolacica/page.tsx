import { Hero } from "@/components";
import { MainLayout } from "@/layouts/MainLayout";

export default function PolitikaKolacica() {
  return (
    <MainLayout>
      <Hero title="Politika Kolačića" shrink section="hero" />
      <div className="flex flex-col gap-6 sm:gap-8 py-8 px-4 w-full max-w-[600px] mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Politika Kolačića stranice
          </h2>
          <p className="text-justify text-sm sm:text-md">
            Upotrebljavajući web stranice www.fresh-ciscenje.hr (u daljnjem
            tekstu STRANICA) dajete svoj pristanak na poštivanje odredbi ovog
            ugovora o navedenim uvjetima uporabe. Ako se sa istima ne slažete,
            molimo vas da ne koristite navedenu internetsku stranicu.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Ograničenja u upotrebi materijala
          </h2>
          <p className="text-justify text-sm sm:text-md">
            Materijali na web stranicama STRANICE zaštićeno su autorsko pravo
            tvrtke Fresh, Obrt za čišćenje, Zagreb (u daljnjem tekstu OBRT) ili
            drugih pravnih osoba. Tekstovi, grafike, baze podataka, HTML kod i
            ostalo, intelektualno su vlasništvo OBRTA ili drugih pravnih osoba
            te su zaštićeni Zakonom o autorskim pravima. Ukoliko želite naše
            materijale koristiti za edukacijske svrhe, slobodno nam se javite i
            rado ćemo vam izaći u susret.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Vlasništvo baza podataka, licence (dozvole) i upotreba
          </h2>
          <p className="text-justify text-sm sm:text-md">
            OBRT je vlasnik STRANICE. OBRT i njegovi suradnici zadržavaju sva
            prava i, ovim ugovorom, niti jedno pravo intelektualnog vlasništva
            nije prenosivo. OBRT vam time dodjeljuje ne ekskluzivnu i
            neprijenosnu dozvolu za uporabu baza podataka na web stranicama
            STRANICE. Baze podataka se mogu upotrijebiti samo za uvid u
            informacije te za vađenje istih, u opsegu (razmjeru) opisanom u
            tekstu koji slijedi. Čitanjem ovog ugovora, obvezujete se na
            korištenje informacija iz baza podataka STRANICE, jedino za vašu
            privatnu uporabu i interne ciljeve – vašeg doma ili vašeg posla, uz
            što se podrazumijeva da to nije prodavanje ili posredovanje
            informacija, publiciranje, distribuiranje, prenošenje ili
            reproduciranje bilo kojeg dijela baze podataka (bilo direktno ili u
            sažetoj, selektivnoj ili tabeliranoj formi). Možete napraviti
            ograničeni broj kopija svakog outputa, u machine-čitajućoj formi ili
            u hard copy formi, što je dovoljno za gore spomenute dozvoljene
            ciljeve. Ništa ovdje spomenuto ne daje vam pravo kreiranja bilo
            kakvih baza podataka, direktorija ili hard copy publikacija – iz ili
            od baza podataka, niti za internu, niti za eksternu uporabu.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">Ostalo</h2>
          <p className="text-justify text-sm sm:text-md">
            Ovaj ugovor o uvjetima uporabe odnosi se na svaki pristup STRANICI.
            OBRT kao jedini vlasnik STRANICE, zadržava pravo izmjene ovog
            Ugovora–izdavanjem nove verzije dokumenta koja će biti važeća od
            datuma objavljivanja iste na ovoj web stranici. Svaki pristup
            informacijama na STRANICI bit će zasebna i diskretna transakcija.{" "}
            <br /> <br /> Ovi uvjeti o uporabi ne smiju biti ustupljeni bez
            unaprijed danog pismenog dopuštenja OBRTA, te će se isti tumačiti i
            provoditi u skladu sa Zakonima.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
