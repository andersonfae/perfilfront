"use client";
import Image from "next/image";
import { useState } from "react";
import girl from "../public/girl.png";
import facebook from "../public/facebook.svg";
import linkedin from "../public/linkedin.svg";
import x from "../public/x.svg";
import instagram from "../public/instagram.svg";

export default function Card() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <main className="">
      <div>
        <div className="relative m-4 px-2.5 pt-32 pb-2.5 bg-white rounded-3xl border border-black flex-col justify-start items-start gap-5 inline-flex">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image src={girl} alt="aqui" width={140} height={140} />
          </div>
          <div className="self-stretch h-14 flex-col justify-center items-center gap-2.5 flex">
            <div className="self-stretch text-center text-black text-xl font-normal font-['Inter']">
              Flávia Pires
            </div>
            <div className="w-6 h-6 justify-center gap-4 inline-flex ">
              <Image src={facebook} alt="facebook" width={24} height={24} />
              <Image src={linkedin} alt="linkedin" width={24} height={24} />
              <Image src={x} alt="x" width={24} height={24} />
              <Image src={instagram} alt="instagram" width={24} height={24} />
            </div>
          </div>
          <div className="self-stretch p-3 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 text-black text-lg font-normal font-['Inter']">
              Sou uma médica clínica geral apaixonada por proporcionar o melhor
              cuidado de saúde aos meus pacientes. Minha dedicação e
              conhecimento me permitem oferecer tratamentos personalizados e
              soluções para promover o bem-estar de todos que confiam em minha
              orientação médica. Estou aqui para ajudar no cuidado da sua saúde.
            </div>
          </div>
          <div
            className="self-stretch p-3 bg-amber-300 rounded-full border border-black justify-center items-center inline-flex cursor-pointer"
            onClick={abrirModal}
          >
            <div className="grow shrink basis-0 text-center text-black text-lg font-normal font-['Inter']">
              Editar
            </div>
          </div>
        </div>
      </div>
      {modalAberto && (
        <div
          id="edit"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative m-4 px-2.5 pt-32 pb-2.5 bg-white rounded-3xl border border-black flex-col justify-start items-start gap-5 inline-flex z-10">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Image src={girl} alt="aqui" width={140} height={140} />
            </div>
            <div className="flex-col justify-center items-center gap-2.5 flex">
              <div className="px-3 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch opacity-60 text-black text-lg font-normal font-['Inter']">
                  Nome
                </div>
                <input
                  type="text"
                  className="self-stretch p-3 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                  placeholder="Flávia Pires"
                />
              </div>
              <div className="px-3 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch opacity-60 text-black text-lg font-normal font-['Inter']">
                  E-mail
                </div>
                <input
                  type="text"
                  className="self-stretch p-3 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                  placeholder=""
                />
              </div>
              <div className="flex-col gap-2 inline-flex">
                <div className="self-stretch opacity-60 text-black text-lg font-normal font-['Inter']">
                  Sobre mim
                </div>
                <input
                  type="text"
                  className="p-3 py-24 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                  placeholder="Sou uma médica clínica geral apaixonada por proporcionar o melhor
                cuidado de saúde aos meus pacientes. Minha dedicação e
                conhecimento me permitem oferecer tratamentos personalizados e
                soluções para promover o bem-estar de todos que confiam em minha
                orientação médica. Estou aqui para ajudar no cuidado da sua saúde."
                />
              </div>
              <div className="flex-col gap-2 inline-flex pt-8">
                <div className="flex gap-2">
                  <Image src={facebook} alt="facebook" width={15} height={15} />
                  <input
                    type="text"
                    className="p-2 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                    placeholder=""
                  />
                </div>
                <div className="flex gap-2">
                  <Image src={linkedin} alt="linkedin" width={15} height={15} />
                  <input
                    type="text"
                    className="p-2 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                    placeholder=""
                  />
                </div>
                <div className="flex gap-2">
                  <Image src={x} alt="x" width={15} height={15} />
                  <input
                    type="text"
                    className="p-2 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                    placeholder=""
                  />
                </div>
                <div className="flex gap-2">
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={15}
                    height={15}
                  />
                  <input
                    type="text"
                    className="p-2 rounded-md border border-black text-black text-lg font-normal font-['Inter']"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <button
              onClick={fecharModal}
              className="self-stretch p-3 bg-amber-300 rounded-full border border-black justify-center items-center inline-flex"
            >
              <div className="grow shrink basis-0 text-center text-black text-lg font-normal font-['Inter']">
                Editar
              </div>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
