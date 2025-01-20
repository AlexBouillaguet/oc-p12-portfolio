import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FaDocker,
  FaWordpressSimple,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript, SiGmail } from "react-icons/si"

import ProjectCard from "./ui/project-card"
import ContactForm from "./ContactForm"

export default function BentoLayout() {
  return (
    <div className="grid grid-cols-12 gap-2 p-6 w-[1200px] grid-flow-row">
      <div className=" w-full col-span-12 row-span-2">
        <h1 className="text-7xl font-bold leading-snug mt-20 mb-20">
          Salut,
          <br />
          Je suis Alex.
          <br />
          <span className="uppercase text-green-400">Développeur</span>
          <br />
          <span className="uppercase text-green-400">Front-End.</span>
          <br />
        </h1>
      </div>
      <Card className="col-span-6 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>A propos</CardTitle>
          <CardDescription>
            Formation 2024-2025 : Intégrateur Web, OpenClassrooms
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          Curieux et toujours prêt à relever de nouveaux défis. <br />
          <br />
          Mon objectif : allier technique et créativité pour répondre aux
          besoins des utilisateurs.
        </CardContent>
      </Card>
      <Card className="col-span-6">
        <CardHeader>
          <CardTitle>Compétences</CardTitle>
          <CardDescription>
            Principalement axé sur l&apos;écosystème JavaScript React
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around items-center gap-3">
            <RiNextjsLine size={68} />
            <SiTypescript size={50} className="text-blue-500" />
            <RiTailwindCssFill size={60} className="text-cyan-400" />
            <FaWordpressSimple size={58} />
            <FaDocker size={60} className="text-sky-600" />
          </div>
        </CardContent>
        <CardFooter className="text-sm ">
          Mais toujours désireux d&apos;explorer et d&apos;apprendre de
          nouvelles technologies.
        </CardFooter>
      </Card>
      <ProjectCard
        className="col-span-8 row-span-2"
        title="Argent Bank"
        imageUrl="/images/mockup1.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
        id="projets"
        imagePosition="-130px"
      ></ProjectCard>
      <ProjectCard
        className="col-span-4"
        title="Kasa"
        imageUrl="/images/mockup2.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
      ></ProjectCard>
      <ProjectCard
        className=""
        title="OhMyFood"
        imageUrl="/images/mockup3.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
        imageClassName="scale-100"
      ></ProjectCard>
      <Card id="contact" className="col-span-12 row-span-3">
        <CardHeader>
          <CardTitle>Me Contacter</CardTitle>
          <CardDescription>
            Une question, un projet ? Je suis à votre disposition !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
      <Card className="aspect-square flex justify-center items-center">
        <a
          href="https://github.com/alexandrebouillaguet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="transition-transform duration-300 hover:scale-[1.1]"
            size={60}
          />
        </a>
      </Card>
      <Card className="aspect-square flex justify-center items-center">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            className="transition-transform duration-300 hover:scale-[1.1]"
            size={60}
          />
        </a>
      </Card>
      <Card className="aspect-square flex justify-center items-center">
        <a href="" target="_blank" rel="noopener noreferrer">
          <SiGmail
            className="transition-transform duration-300 hover:scale-[1.1]"
            size={55}
          />
        </a>
      </Card>
    </div>
  )
}
