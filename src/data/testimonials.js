import { getTestimonialImage } from '../utils/images'

export const testimonials = [
    {
        id: 1,
        name: 'Ana María López',
        position: 'Empresario',
        image: getTestimonialImage('testimonial1'),
        text: 'El mejor servicio bancario que he experimentado. La plataforma digital es increíblemente intuitiva y el servicio al cliente es excepcional.',
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        position: 'Profesional Independiente',
        image: getTestimonialImage('testimonial2'),
        text: 'Cambiarme a este banco fue la mejor decisión financiera que he tomado. Las tasas son competitivas y la app móvil es fantástica.',
    },
    {
        id: 3,
        name: 'Maria Torres',
        position: 'Director Financiero',
        image: getTestimonialImage('testimonial3'),
        text: 'La seguridad y rapidez de las transacciones son impresionantes. Definitivamente recomiendo sus servicios a todos mis colegas.',
    }
]