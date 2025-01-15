import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaDocker, FaWordpressSimple } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import ProjectCard from "./ui/project-card"
import ContactForm from "./ContactForm"


export default function BentoLayout() {
  return (
    <div className="grid grid-cols-6 gap-6 p-6 w-[1200px] grid-flow-row">
      <div className=" w-full col-span-2 md:col-span-4 row-span-2">
        <h1 className="text-7xl font-bold leading-snug">
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
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>A propos</CardTitle>
          <CardDescription>
            Formation 2024-2025 : Intégrateur Web, OpenClassrooms
          </CardDescription>
        </CardHeader>
        <CardContent className="text-base">
          Curieux et toujours prêt à relever de nouveaux défis. <br />
          <br />
          Mon objectif : allier technique et créativité pour répondre aux
          besoins des utilisateurs.
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Compétences</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around items-center gap-3 text-muted-foreground">
            <RiNextjsFill size={60} />
            <SiTypescript size={50} />
            <RiTailwindCssFill size={60} />
            <FaWordpressSimple size={60} />
            <FaDocker size={60} />
          </div>
        </CardContent>
        <CardFooter className="text-sm ">
          Principalement axé sur l&apos;écosystème JavaScript, mais toujours
          désireux d&apos;explorer et d&apos;apprendre de nouvelles
          technologies.
        </CardFooter>
      </Card>
      <ProjectCard
        title="Mon Projet"
        imageUrl="/images/mockup1.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
      ></ProjectCard>
      <ProjectCard
        title="Mon Projet"
        imageUrl="/images/mockup2.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
      ></ProjectCard>
      <ProjectCard
        title="Mon Projet"
        imageUrl="/images/mockup3.png"
        description="Description de mon projet"
        githubUrl="https://github.com/votre-repo"
        demoUrl="https://votre-demo.com"
      ></ProjectCard>
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle>Me Contacter</CardTitle>
          <CardDescription>Une question, un projet ? Je suis à votre disposition !</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
