import { Hero } from "@/components";
import { MainLayout } from "@/layouts/MainLayout";

export default function PravilaPrivatnosti() {
  return (
    <MainLayout>
      <Hero title="Pravila Privatnosti" shrink section="hero" />
      <div className="flex flex-col gap-6 sm:gap-8 py-8 px-4 w-full max-w-[600px] mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">Privatnost</h2>
          <p className="text-justify text-sm sm:text-base">
            Web stranica{" "}
            <span className="font-bold">www.fresh-ciscenje.hr</span> (dalje u
            tekstu STRANICA) poštuje privatnost svojih korisnika i posjetitelja.
            Podatke iz procesa registracije, te ostale podatke o korisniku,
            STRANICA neće davati na uvid trećoj strani. Podaci o korisniku neće
            biti dostupni trećoj strani osim u slučaju kada je takva obaveza
            regulirana zakonom.
          </p>
          <p className="text-justify text-sm sm:text-base">
            STRANICA može u skladu sa zakonom prikupljati određene podatke o
            korisnicima dobivene tijekom korištenja stranice (isključivo podaci
            o računalu i podaci o internet provideru). Ove podatke STRANICA
            koristi kako bi imao informacije kojima bi poboljšao stranicu i
            njezine sadržaje dodatno usmjerio i prilagodio publici koja ju
            posjećuje.
          </p>
          <p className="text-justify text-sm sm:text-base">
            STRANICA se obavezuje da će čuvati privatnost korisnika stranice,
            osim u slučaju teškog kršenja pravila STRANICE ili nezakonitih
            aktivnosti korisnika.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">Kolačići</h2>
          <p className="text-justify text-sm sm:text-base">
            Kolačić je informacija spremljena na vaše računalo pomoću koje web
            mjesto pamti vaše radnje i postavke. Kolačići obično spremaju vaše
            postavke za web stranicu kao što su preferirani jezik ili adresa.
            Svaki put kada otvorite neku stranicu, web poslužitelj može
            pročitati vrijednosti koje je ranije spremio u kolačićima, a u
            internet preglednicima možete brisati svoje kolačiće i upravljati
            postavkama spremanja kolačića.
          </p>
          <p className="text-justify text-sm sm:text-base">
            Kako možete sami upravljati postavkama u pojedinim preglednicima
            saznajte na sljedećim poveznicama:
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=hr"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/hr/kb/omogucivanje-i-onemogucivanje-kolacica-web-lokacijama-pohranjenim"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/hr-hr/microsoft-edge/cookies-in-microsoft-edge-63947406-40ac-c3b4-7b2f-2a8d33f9c3c9"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/hr-hr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Safari
              </a>
            </li>
          </ul>
          <p className="text-justify text-sm sm:text-base">
            Fresh koristi nužne analitičke kolačiće, kako bismo omogućili
            pojedine tehničke značajke poput analitike i na taj način osigurali
            pozitivno korisničko iskustvo, te poboljšali kvalitetu i sadržaj
            ponudenih usluga.
          </p>
          <p className="text-justify text-sm sm:text-base">
            Za obradu osobnih podataka odgovornost snosi:
          </p>

          <p className="text-sm sm:text-base">
            <span className="font-bold">Fresh, Obrt za čišćenje</span>
            <br />
            <span className="font-bold">Adresa:</span> Vaganačka 31, Zagreb,
            Hrvatska
            <br />
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:obrtzaciscenjefresh@gmail.com"
              className="underline"
            >
              obrtzaciscenjefresh@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Vlasništvo baza podataka, licence (dozvole) i upotreba
          </h2>
          <p className="text-justify text-sm sm:text-base">
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
          <p className="text-justify text-sm sm:text-base">
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
