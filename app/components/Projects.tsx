import { projects, type Project } from "../data/projects";

function ProjectCard({ title, description, image, link, tags, date }: Project) {
  const body = (
    <>
      <div className="aspect-video w-full overflow-hidden bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized */}
        <img
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold text-yellow-100 group-hover:text-yellow-300">
            {title}
          </h3>
          {date && <span className="shrink-0 text-sm text-neutral-400">{date}</span>}
        </div>

        <p className="text-neutral-300">{description}</p>

        {tags && tags.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-yellow-300/60";

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {body}
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
  );
}

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-20 md:px-8">
      <h2 className="mb-10 text-4xl font-semibold">
        <span className="text-yellow-100">Projects</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
