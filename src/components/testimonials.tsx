import { Marquee } from "@/components/magicui/marquee"

const portfolioProjects = [
  {
    name: "Naviplas",
    url: "https://naviplas.netlify.app/",
    body: "Landing page de muestra de productos de Naviplas",
    img: "/naviplas.webp",
  },
  {
    name: "Crearte.Maja",
    url: "https://creartemaja.vercel.app/",
    body: "Ecommerce de gestión con catálogo y envio de pedido al correo",
    img: "/crearte-maja.webp",
  },
  {
    name: "Centro IPhone",
    url: "https://centroiphoneweb.netlify.app/",
    body: "Landing page de muestra de productos de Centro IPhone",
    img: "/centro-iphone.webp",
  },
  {
    name: "Circulo Matero",
    url: "https://circulomatero.vercel.app/",
    body: "Ecommerce de gestión con catálogo y envio de pedido al correo",
    img: "/circulo-matero.webp",
  },
  {
    name: "Ig.Producciones",
    url: "https://igproducciones.vercel.app/",
    body: "Landing page moderna para una empresa de servicios de luces y sonido",
    img: "/ig-producciones.webp",
  },
  {
    name: "ESAENZ.ARQ",
    url: "https://esaenzarq.vercel.app/",
    body: "Landing page para un arquitecto que buscaba mostrar sus proyectos a sus clientes",
    img: "/esaenzarq.webp",
  },
  {
    name: "Ferreteria FerreSur",
    url: "https://ferresur.vercel.app/",
    body: "Desarrolle una landing page para una ferreteria, además se le mejoro su busqueda en Google Maps",
    img: "/ferresur.webp",
  },
]

const firstColumn = portfolioProjects.slice(0, 2)
const secondColumn = portfolioProjects.slice(2, 4)
const thirdColumn = portfolioProjects.slice(4, 6)

const ProjectCard = ({
  img,
  name,
  url,
  body,
}: {
  img: string
  name: string
  url: string
  body: string
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] hover:border-cyan-600 transition-all"
    >
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-cyan-600/20 to-transparent blur-md"></div>

      <img
        src={img}
        alt={name}
        className="mb-5 h-30 w-full rounded-xl object-cover"
      />

      <div className="text-white font-semibold text-lg leading-tight mb-2">
        {name}
      </div>

      <div className="text-white/60 text-sm leading-relaxed">
        {body}
      </div>
    </a>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            Proyectos de clientes
          </h2>

          <p className="mt-5 text-center relative z-10 text-lg text-zinc-500">
            Una selección de los trabajos más recientes que diseñé y desarrollé.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden 
        [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">

          {/* Mobile: mostrar TODOS los proyectos */}
          <div className="md:hidden">
            <Marquee pauseOnHover vertical className="[--duration:35s]">
              {portfolioProjects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Marquee>
          </div>

          {/* Desktop columnas separadas */}
          <div className="hidden md:block">
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
