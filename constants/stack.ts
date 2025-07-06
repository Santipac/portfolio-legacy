
export const languages = [
    { label: 'JavaScript', type: 'language' },
    { label: 'TypeScript', type: 'language' },
];

export const tools = [
    { label: 'Vitest', type: 'tools' },
    { label: 'Playwright', type: 'tools' },
    { label: 'Docker', type: 'tools' },
];

export const backend = [
    { label: 'Node', type: 'backend' },
    { label: 'Hono', type: 'backend' },
    { label: 'Express', type: 'backend' },
    { label: 'Nest', type: 'backend' },
    { label: 'tRPC', type: 'backend' },
    { label: 'PrismaORM', type: 'backend' },
    { label: 'DrizzleORM', type: 'backend' },
    { label: 'PostgreSQL', type: 'backend' },
    { label: 'Supabase', type: 'backend' },
];

export const frontend = [
    { label: 'React', type: 'frontend' },
    { label: 'React Native', type: 'frontend' },
    { label: 'Next', type: 'frontend' },
    { label: 'Astro', type: 'frontend' },
    { label: 'Redux', type: 'frontend' },
    { label: 'Zustand', type: 'frontend' },
    { label: 'React Query', type: 'frontend' },
    { label: 'Storybook', type: 'frontend' },
    { label: 'Testing Library', type: 'frontend' },
    { label: 'TailwindCSS', type: 'frontend' },
];

export const stack = [...tools, ...frontend, ...backend, ...languages];