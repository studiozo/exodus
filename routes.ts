export interface RouteConfig {
    key: string;
    path: string;
    title: string;
    description: string;
    navLabel?: string;
}

const routes: RouteConfig[] = [
    {
        key: 'home',
        path: '/',
        title: 'EXODUS | Sacred Blackwork Tattoo Bali — Pierre Marcel',
        description: 'Sacred blackwork body art by Pierre Marcel. Custom designs honoring the body\'s architecture. Tribal, geometric, ornamental & ancestral tattoos. Based in Uluwatu, Bali.',
    },
    {
        key: 'philosophy',
        path: '/philosophy',
        title: 'Philosophy — Ancestral Body Art | EXODUS Tattoo Bali',
        description: 'The philosophy behind EXODUS body art. Sacred geometry, ancestral traditions, and the body as temple. Blackwork tattoo as ritual, not decoration.',
        navLabel: 'Philosophy',
    },
    {
        key: 'portfolio',
        path: '/portfolio',
        title: 'Portfolio | EXODUS Blackwork Tattoo Bali — Pierre Marcel',
        description: 'Selected works by Pierre Marcel at EXODUS Bali. Blackwork, tribal, sacred geometry, ornamental, Nordic, and Japanese-inspired tattoo portfolio.',
        navLabel: 'Work',
    },
    {
        key: 'studio',
        path: '/studio',
        title: 'The Studio — Uluwatu, Bali | EXODUS Tattoo',
        description: 'EXODUS tattoo studio in Uluwatu, Bali. A private creative space for sacred blackwork body art by Pierre Marcel. Appointments only.',
        navLabel: 'Studio',
    },
    {
        key: 'about',
        path: '/about',
        title: 'Pierre Marcel — Blackwork Tattoo Artist | EXODUS Bali',
        description: 'Pierre Marcel — tattoo artist and founder of EXODUS. From Caracas to Bali, engineering precision meets ancient artistry in every blackwork piece.',
        navLabel: 'About',
    },
    {
        key: 'testimonials',
        path: '/testimonials',
        title: 'Client Stories | EXODUS Tattoo Bali — Pierre Marcel',
        description: 'Client testimonials and stories from EXODUS tattoo sessions. Hear from collectors who\'ve experienced sacred blackwork by Pierre Marcel in Bali.',
        navLabel: 'Testimonials',
    },
    {
        key: 'merch',
        path: '/store',
        title: 'Store | EXODUS Tattoo Body Art',
        description: 'EXODUS merchandise and tattoo body art store. Branded apparel and accessories from the sacred blackwork studio in Bali.',
        navLabel: 'Store',
    },
    {
        key: 'contact',
        path: '/contact',
        title: 'Book a Consultation | EXODUS Tattoo Bali — Pierre Marcel',
        description: 'Book a tattoo consultation with Pierre Marcel at EXODUS Bali. Custom blackwork designs, private sessions, and appointment inquiries.',
        navLabel: 'Contact',
    },
    {
        key: 'inspo',
        path: '/styles',
        title: 'Tattoo Styles & Inspiration | EXODUS Bali',
        description: 'Explore tattoo styles and inspiration at EXODUS. Blackwork, tribal, sacred geometry, ornamental, Nordic, and Japanese influences.',
    },
    {
        key: 'villa',
        path: '/private-sessions',
        title: 'Private Sessions | EXODUS Tattoo Bali',
        description: 'Private tattoo sessions at EXODUS Bali. Exclusive villa-based blackwork sessions by Pierre Marcel in Uluwatu.',
    },
    {
        key: 'ai-context',
        path: '/index',
        title: 'EXODUS — Site Index',
        description: 'EXODUS site index and structured context for search engines and AI systems.',
    },
];

const keyToPathMap = new Map(routes.map(r => [r.key, r.path]));
const pathToRouteMap = new Map(routes.map(r => [r.path, r]));

export function keyToPath(key: string): string {
    return keyToPathMap.get(key) || '/';
}

export function routeByPath(path: string): RouteConfig | undefined {
    return pathToRouteMap.get(path);
}

export function routeByKey(key: string): RouteConfig | undefined {
    return routes.find(r => r.key === key);
}

export const navItems = routes.filter(r => r.navLabel);

export default routes;
