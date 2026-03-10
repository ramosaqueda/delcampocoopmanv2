import { defineCollection, z } from 'astro:content';

// =============================================================================
// COLECCIONES DE CONTENIDO - Del Campo Coopman
// =============================================================================

/**
 * Insights - Artículos del blog legal
 */
const insights = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        category: z.string(),
        description: z.string(),
        image: z.string().optional(),
    }),
});

/**
 * Testimonials - Testimonios de clientes
 */
const testimonials = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        position: z.string(),
        quote: z.string(),
        avatar: z.string().optional(),
        featured: z.boolean().optional().default(false),
    }),
});

/**
 * Clients - Logos de clientes para el carrusel
 */
const clients = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        logo: z.string(),
        website: z.string().optional(),
        order: z.number().optional().default(0),
    }),
});

/**
 * Team - Miembros del equipo
 */
const team = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        photo: z.string().optional(),
        bio: z.string(),
        email: z.string().optional(),
        linkedin: z.string().optional(),
        order: z.number().optional().default(0),
    }),
});

// =============================================================================
// EXPORTAR COLECCIONES
// =============================================================================

export const collections = {
    insights,
    testimonials,
    clients,
    team,
};
