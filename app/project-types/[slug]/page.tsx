import { PROJECT_TYPES_DATA } from "@/utils/projectTypes";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

/* ===============================
   ✅ REQUIRED FOR STATIC EXPORT
   Generates all project type pages
================================ */
export function generateStaticParams() {
  return PROJECT_TYPES_DATA.map((type) => ({
    slug: type.slug,
  }));
}

/* ===============================
   PAGE COMPONENT
================================ */
export default function ProjectTypePage({ params }: PageProps) {
  const project = PROJECT_TYPES_DATA.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-charcoal mb-6">
        {project.title}
      </h1>

      <p className="text-lg text-textMuted whitespace-pre-line mb-10">
        {project.description}
      </p>

      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
