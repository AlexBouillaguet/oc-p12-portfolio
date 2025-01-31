import clsx from "clsx"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

// Définition des propriétés du composant ProjectCard
interface ProjectCardProps {
  title: string
  imageUrl: string
  description: string
  githubUrl: string
  demoUrl?: string
  className?: string
  id?: string
  technologies: string[]
}

// Composant ProjectCard
export default function ProjectCard({
  title,
  imageUrl,
  description,
  githubUrl,
  demoUrl,
  className,
  id,
  technologies,
}: ProjectCardProps) {
  return (
    <Card
      id={id}
      className={clsx(
        "w-full mx-auto overflow-hidden col-span-4 flex flex-col",
        className
      )}
    >
      <CardHeader className="flex-shrink-0">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Projet de formation
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 aspect-video overflow-hidden ">
        <a
          className="relative block h-full"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} project screenshot`}
            fill
            loading="lazy"
            sizes="(max-width: 1200px) 100vw"
            className={clsx(
              "object-cover transition-transform duration-300 hover:scale-110"
            )}
          />
        </a>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6">
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between gap-4">
            <Button variant="outline" size="sm" asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Github"
              >
                <FaGithub className="w-4 h-4" />
                <span className="sr-only">GitHub repository</span>
                <span aria-hidden="false">GitHub</span>
              </a>
            </Button>
            {demoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="sr-only">Live demo</span>
                  <span aria-hidden="false">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
