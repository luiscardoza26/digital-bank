import { getServiceImage } from '../utils/images';

export const services = [
    {
        id: 1,
        title: 'Cuentas Personales',
        description: 'Gestiona tu dinero con cuentas personalizadas y sin comisiones mensuales.',
        image: getServiceImage('personal-account'),
    },
    {
        id: 2,
        title: 'Préstamos',
        description: 'Obtén préstamos personales con las mejores tasas del mercado.',
        image: getServiceImage('loans'), 
    },
    {
        id: 3,
        title: 'Inversiones',
        description: 'Multiplica tu capital con nuestras opciones de inversión seguras.',
        image: getServiceImage('investments'), 
    }

]