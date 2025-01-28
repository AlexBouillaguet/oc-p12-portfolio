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
import { ContactFormNew } from "./ContactFormNew"
import { SkillIcon } from "./ui/skill-icon"

export default function BentoLayout() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 p-6 xl:w-[1200px] xl:grid-flow-row">
      <div className=" col-span-11 flex flex-col justify-center my-20 xl:my-40">
        <h1 className="text-5xl md:text-7xl font-bold px-2">
          Salut,
          <br />
          Je suis Alex.
          <br />
          <span className="uppercase text-green-400">Front-End</span>
          <br />
          <span className="uppercase text-green-400">Développeur.</span>
          <br />
        </h1>
      </div>
      <Card className="col-span-6 flex flex-col">
        <CardHeader>
          <CardTitle>A propos</CardTitle>
          <CardDescription>
            Formation 2024-2025 : Intégrateur Web, OpenClassrooms
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Curieux et toujours prêt à relever de nouveaux défis. <br />
          <br />
          Mon objectif : allier technique et créativité pour répondre aux
          besoins des utilisateurs.
        </CardContent>
        <CardFooter className="flex items-center text-foreground gap-6">
          <a
            href="https://github.com/alexandrebouillaguet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="transition-transform duration-300 hover:scale-[1.1]"
              size={20}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              className="transition-transform duration-300 hover:scale-[1.1]"
              size={20}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <SiGmail
              className="transition-transform duration-300 hover:scale-[1.1]"
              size={20}
            />
          </a>
        </CardFooter>
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
            <SkillIcon icon={<RiNextjsLine size={80} />} />
            <SkillIcon icon={<SiTypescript size={50} />} />
            <SkillIcon icon={<RiTailwindCssFill size={60} />} />
            <SkillIcon icon={<FaWordpressSimple size={58} />} />
            <SkillIcon icon={<FaDocker size={60} />} />
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Mais toujours désireux d&apos;explorer et d&apos;apprendre de
          nouvelles technologies.
        </CardFooter>
      </Card>
      <ProjectCard
        className="col-span-12"
        title="Argent Bank"
        description="Application bancaire développée avec React et Redux, intégrant une API REST pour la gestion des transactions et l'authentification des utilisateurs. Interface responsive avec tableau de bord personnalisé et documentation Swagger pour les points d'accès API."
        imageUrl="/images/mockup1.webp"
        technologies={["React", "Redux", "API Rest"]}
        githubUrl="https://github.com/AlexBouillaguet/ArgentBank-Frontend"
        id="projets"
      ></ProjectCard>
      <ProjectCard
        className="col-span-6"
        title="Kasa"
        description="Application de location immobilière développée avec React et Vite. Interface moderne avec animations CSS et Sass."
        imageUrl="/images/kasa2.webp"
        technologies={["React", "Vite", "Sass"]}
        githubUrl="https://github.com/AlexBouillaguet/oc-p7-kasa"
      ></ProjectCard>
      <ProjectCard
        className="col-span-6"
        title="OhMyFood"
        description="Site de réservation de restaurants conçu en mobile-first avec une approche moderne. Interface enrichie d'animations CSS avancées et structurée avec Sass."
        imageUrl="/images/omf2.webp"
        technologies={["HTML", "Sass"]}
        githubUrl="https://github.com/AlexBouillaguet/oc-p4-oh-my-food"
        demoUrl="https://alexbouillaguet.github.io/oc-p4-oh-my-food/"
      ></ProjectCard>
      <Card id="contact" className="col-span-12 row-span-3">
        <CardHeader>
          <CardTitle>Me contacter</CardTitle>
          <CardDescription>
            Une question, un projet ? Je suis à votre disposition !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactFormNew />
        </CardContent>
      </Card>
    </div>
  )
}
