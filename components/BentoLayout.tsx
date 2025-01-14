import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BentoLayout() {
  return (
    <div className="grid grid-cols-4  gap-6 p-6 w-[1200px] grid-flow-row">
      <div className=" w-full col-span-2 row-span-2">
        <h1 className="text-6xl font-bold leading-snug">
          Hey,
          <br />
          Je suis Alex.
          <br />
          <span className="uppercase text-green-400">Développeur</span>
          <br />
          <span className="uppercase text-green-400">Front-End.</span>
          <br />
        </h1>
      </div>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Qui-suis je ?</CardTitle>
          <CardDescription>Formation 2024-2025 : Intégrateur Web, OpenClassrooms</CardDescription>
        </CardHeader>
        <CardContent className="text-base">
          J&apos;ai 40 ans, je vis à Nantes.
          Curieux et toujours prêt à relever de nouveaux défis. <br />
          <br />
          Mon objectif : allier technique et créativité pour répondre aux
          besoins des utilisateurs.
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Compétences</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
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
