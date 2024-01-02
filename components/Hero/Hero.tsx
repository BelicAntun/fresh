import clsx from "clsx";
import Link from "next/link";

export function Hero({
  title,
  subtitle,
  shrink,
  showLink,
  linkText,
  linkTo,
  section,
}: Props) {
  return (
    <div
      className={clsx("bg-hero bg-cover bg-no-repeat bg-center", {
        "bg-hero": section === "hero",
        "bg-kontakt": section === "kontakt",
      })}
    >
      <div
        className={clsx(
          "bg-slate-950 bg-opacity-50 flex items-center justify-center",
          { "h-[600px]": !shrink, "py-40": shrink }
        )}
      >
        <div className="container text-white text-center flex flex-col gap-y-8 px-4">
          {subtitle && <p className="uppercase tracking-[2px]">{subtitle}</p>}
          <h1 className="text-4xl sm:text-6xl font-bold">{title}</h1>
          {showLink && (
            <Link
              className="border border-blue-500 py-4 px-8 uppercase tracking-[2px] text-sm hover:bg-blue-500 hover:text-white transition-colors self-center rounded-lg"
              href={linkTo}
              scroll={false}
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  subtitle?: string;
  shrink?: boolean;
  section: string;
} & (
  | {
      showLink: true;
      linkText: string;
      linkTo: string;
    }
  | {
      showLink?: false;
      linkText?: never;
      linkTo?: never;
    }
);
