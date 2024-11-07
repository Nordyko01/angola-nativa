'use cliente'
import Image from "next/image";
import React from "react";

import { VscHeart } from "react-icons/vsc";
import { RiUserLine } from "react-icons/ri";
import { HiMagnifyingGlass, HiArrowSmallRight } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

interface PropFruites {
  id: string;
}

const Fruites: PropFruites[] = [
  {
    id: "1"
  },
  {
    id: "2"
  },

]





export default function Home() {

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5">

        <div className=" flex items-center justify-between w-full h-20 border-b-2">
          <Image width={200} height={200} src="/img/Angola-Nativa.png" alt="Angola-Nativa Logo" />

          <div className="bg-slate-100 w-[500px] h-14 rounded-xl flex items-center justify-between">

            <Select >
              <SelectTrigger className="w-[180px] bg-transparent border-none outline-none">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>


            <div className=" flex items-center justify-between px-2 ">
              <Input type="text" placeholder="Procurar" className="bg-transparent border-none outline-none" />
              <HiMagnifyingGlass className="text-black w-6 h-6" />
            </div>
          </div>

          <div className="flex items-center justify-between w-[400px] ">

            <div className="flex flex-col items-end">
              <span>For support</span>
              <span>+244 958007921</span>
            </div>

            <div className="flex items-center justify-between w-28">
              <Button variant="outline" className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center"><RiUserLine className="w-6 h-6" /> </Button>
              <Button variant="outline" className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center"><VscHeart className="w-6 h-6" /> </Button>
            </div>

            <div className="flex flex-col">
              <button>your card</button>
              <span>1234.234</span>
            </div>

          </div>
        </div>

        <div className="flex items-center justify-between py-8 w-[70%] ">
          <Select>
            <SelectTrigger className="w-[180px] border-none outline-none">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>
          <Button variant="outline" className=" border-none hover:bg-transparent">Button</Button>

        </div>

        <div className="flex items-center justify-between">
          <Carousel className="w-[940px] ">
            <CarouselContent>
              <CarouselItem> <div className="w-[940px] h-[700px] rounded-2xl bg-blue-100 flex items-center">

                <div className=" w-[600px] h-[400px] flex flex-col justify-between px-10 ">
                  <div className="text-4xl font-serif text-orange-400">100% Natural</div>
                  <h1 className="text-6xl font-normal">Smoothie Fresco e Suco de Verão</h1>
                  <span className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  repellat expedita voluptatem praesentium cum?</span>
                  <Button variant="outline" className="w-36 h-16 border-2 border-black bg-transparent hover:bg-transparent ">Shop Now</Button>

                </div>
                <Image width={300} height={500} src="/img/fruit.png" alt="smooth-fruit" className="object-cover" />
              </div></CarouselItem>
              <CarouselItem> <div className="w-[940px] h-[700px] rounded-2xl bg-blue-100 flex items-center">

                <div className=" w-[600px] h-[400px] flex flex-col justify-between px-10 ">
                  <div className="text-4xl font-serif text-orange-400">100% Natural</div>
                  <h1 className="text-6xl font-normal">Smoothie Fresco e Suco de Verão</h1>
                  <span className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  repellat expedita voluptatem praesentium cum?</span>
                  <Button variant="outline" className="w-36 h-16 border-2 border-black bg-transparent hover:bg-transparent ">Shop Now</Button>

                </div>
                <Image width={300} height={500} src="/img/fruit.png" alt="smooth-fruit" className="object-cover" />
              </div></CarouselItem>
              <CarouselItem> <div className="w-[940px] h-[700px] rounded-2xl bg-blue-100 flex items-center">

                <div className=" w-[600px] h-[400px] flex flex-col justify-between px-10 ">
                  <div className="text-4xl font-serif text-orange-400">100% Natural</div>
                  <h1 className="text-6xl font-normal">Smoothie Fresco e Suco de Verão</h1>
                  <span className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  repellat expedita voluptatem praesentium cum?</span>
                  <Button variant="outline" className="w-36 h-16 border-2 border-black bg-transparent hover:bg-transparent ">Shop Now</Button>

                </div>
                <Image width={300} height={500} src="/img/fruit.png" alt="smooth-fruit" className="object-cover" />
              </div></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>



          <div className="h-[700px] flex flex-col justify-between">
            {Fruites.map((PropFruites) => (
              <div key={PropFruites.id} className="w-[550px] h-[320px] rounded-2xl bg-slate-100 px-6 flex items-center">
                <div className=" w-[350px] h-[60%] flex flex-col justify-between">
                  <div className="text-5xl font-normal">20% Off</div>
                  <div className="flex items-center justify-between w-40">
                    <div className="border-b-[1px] border-black w-24 "></div>
                    <span>OFERTA</span>
                  </div>
                  <h1 className="text-4xl font-mono w-[300px] ">Frutas e vegetais</h1>
                  <Link href="#" className="flex items-center text-slate-400">Coleção de loja <HiArrowSmallRight className="w-5 h-5" /></Link>
                </div>
                <Image width={200} height={400} src="/img/sesta.png" alt="Sesta-fruta" className="object-cover" />
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}
