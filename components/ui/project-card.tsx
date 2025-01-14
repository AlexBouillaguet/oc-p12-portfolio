import Image from "next/image"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  imageUrl: string
  description: string
  githubUrl: string
  demoUrl: string
}

export default function ProjectCard({
  title,
  imageUrl,
  description,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-full mx-auto overflow-hidden col-span-2">
      <CardHeader>
        <CardTitle className="font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} project screenshot`}
          width={384}
          height={216}
          layout="responsive"
          className="object-cover"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm" asChild>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub repository</span>
              <span aria-hidden="true">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="sr-only">Live demo</span>
              <span aria-hidden="true">Live Demo</span>
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
