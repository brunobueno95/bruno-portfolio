export type Project = {
  slug: string
  year: string
  title: string
  image: string
  blurb: string
  what: string
  taught: string
  overview: string[]
  highlights: string[]
  live: string | null
}

type ProjectMeta = {
  slug: string
  year: string
  image: string
  live: string | null
}

const meta: ProjectMeta[] = [
  {
    slug: 'overhead-crane-simulator',
    year: '2026',
    image: '/projects/overhead-crane.jpg',
    live: 'https://g4-simulator.vercel.app/'
  },
  {
    slug: 'drilling-operations-trainer',
    year: '2026',
    image: '/projects/drilling-tool.jpg',
    live: 'https://drilling-fundamentals-ynd9.vercel.app/'
  },
  {
    slug: 'rigging-route-planner',
    year: '2026',
    image: '/projects/rigging-planner.jpg',
    live: 'https://rigging-planner-s4fb.vercel.app/'
  }
]

export const useProjects = () => {
  const { t, tm, rt } = useI18n()

  const toProject = (m: ProjectMeta): Project => {
    const base = `projects.items.${m.slug}`
    const rawOverview = tm(`${base}.overview`) as unknown
    const rawHighlights = tm(`${base}.highlights`) as unknown
    const overview = Array.isArray(rawOverview) ? rawOverview.map((v) => rt(v as string)) : []
    const highlights = Array.isArray(rawHighlights) ? rawHighlights.map((v) => rt(v as string)) : []
    return {
      slug: m.slug,
      year: m.year,
      image: m.image,
      live: m.live,
      title: t(`${base}.title`),
      blurb: t(`${base}.blurb`),
      what: t(`${base}.what`),
      taught: t(`${base}.taught`),
      overview,
      highlights
    }
  }

  const projects = computed(() => meta.map(toProject))

  return {
    projects,
    getProject: (slug: string) => {
      const m = meta.find((p) => p.slug === slug)
      return m ? toProject(m) : undefined
    }
  }
}
