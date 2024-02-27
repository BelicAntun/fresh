import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t-8 border-blue-500 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-10 mb-8">
          <div>
            <p className="text-3xl font-bold uppercase mb-4">Fresh</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi asperiores saepe ratione vero, rerum cum quo aspernatur
              non beatae fugiat!
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-wrap items-center justify-center text-sm gap-4">
          <p>
            &copy;{new Date().getFullYear()} Fresh, obrt za čišćenje. Sva prava
            pridržana.
          </p>

          <Link
            href="/pravila-privatnosti"
            className="text-gray-400 underline hover:no-underline"
          >
            Pravila Privatnosti
          </Link>
          <Link
            href="/politika-kolacica"
            className="text-gray-400 underline hover:no-underline"
          >
            Politika Kolačića
          </Link>
          <Link
            href="/uvjeti-koristenja"
            className="text-gray-400 underline hover:no-underline"
          >
            Uvjeti korištenja
          </Link>
        </div>
      </div>
    </div>
  );
}
