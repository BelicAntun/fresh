import Image from "next/image";
import { MainLayout } from "@/layouts/MainLayout";
import {
  MdPhone,
  MdLocationPin,
  MdEmail,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Hero } from "@/components";

export default function Contact() {
  return (
    <MainLayout>
      <Hero title="Kontakt" shrink section="kontakt" />
      <div className="container mx-auto px-4 py-16 sm:py-28 max-w-[900px]">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex flex-col sm:flex-row gap-10 w-full max-w-[500px] mx-auto">
            <div className="w-full md:w-52 flex flex-col gap-10">
              <div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 text-xl text-blue-500">
                    <MdPhone />
                  </div>
                  <h3 className="text-lg mb-2">Telefon</h3>
                </div>
                <a
                  href="Tel:+385922416743"
                  className="text-sm hover:text-blue-500 hover:underline transition-colors"
                >
                  + 385 (95) 241-6743
                </a>
              </div>
              <div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 text-xl text-blue-500">
                    <MdLocationPin />
                  </div>
                  <h3 className="text-lg mb-2">Adresa</h3>
                </div>
                <address className="text-sm">
                  <p>Vaganačka 31</p>
                  <p>Zagreb, Hrvatska</p>
                </address>
              </div>
            </div>
            <div className="w-full md:w-52 flex flex-col gap-10">
              <div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 text-xl text-blue-500">
                    <MdEmail />
                  </div>
                  <h3 className="text-lg mb-2">E-mail</h3>
                </div>
                <a
                  href="mailto:obrtzaciscenjefresh@gmail.com"
                  className="text-sm hover:text-blue-500 hover:underline transition-colors"
                >
                  obrtzaciscenjefresh@gmail.com
                </a>
              </div>
              <div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 text-xl text-blue-500">
                    <MdOutlinePeopleAlt />
                  </div>
                  <h3 className="text-lg mb-2">Društvene mreže</h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=385922416743"
                    target="_blank"
                    className="text-3xl text-[#25D366] hover:text-[#075E54] hover:underline transition-colors"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com/fresh_obrt_za_ciscenje/"
                    target="_blank"
                    className="text-[22px] instagram rounded-md text-white p-[4px] hover:text-opacity-75"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61554058824757"
                    target="_blank"
                    className="text-3xl text-[#4267B2] hover:text-opacity-75 hover:underline transition-colors"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/hero-img-4.jpg"
              width={500}
              height={666}
              alt="Bakery"
              priority
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
