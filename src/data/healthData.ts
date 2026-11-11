import { OralHealthArticle } from '../types';

export const HEALTH_ARTICLES: OralHealthArticle[] = [
  {
    id: 'revisiones-odontologicas',
    title: 'La importancia de las revisiones odontológicas',
    subtitle: 'Detección temprana y evaluación integral',
    iconName: 'Stethoscope',
    summary:
      'Visitar al odontólogo de manera periódica permite identificar alteraciones que muchas veces se desarrollan de forma silenciosa sin generar dolor inmediato. Una valoración profesional a tiempo evita tratamientos invasivos y preserva las piezas dentales sanas.',
    points: [
      'Identificación de lesiones iniciales de caries antes de que comprometan el nervio.',
      'Valoración del estado periodontal para detectar inflamaciones gingivales tempranas.',
      'Revisión minuciosa de mucosas bucales, lengua y tejidos de soporte.',
      'Acompañamiento profesional para resolver dudas sobre cuidados específicos.',
    ],
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'prevencion-enfermedades',
    title: 'La prevención de enfermedades bucales',
    subtitle: 'Protección activa del esmalte y encías',
    iconName: 'ShieldCheck',
    summary:
      'La prevención es el método más efectivo y económico para mantener una boca sana a lo largo de la vida. La formación de placa bacteriana puede controlarse mediante hábitos consistentes, evitando afecciones comunes como la gingivitis y la caries dental.',
    points: [
      'Control diario de la biopelícula dental en todas las superficies dentarias.',
      'Fortalecimiento del esmalte dental frente a ácidos y bacterias.',
      'Reducción de factores de riesgo mediante una alimentación balanceada.',
      'Profilaxis profesional para remover cálculo (sarro) en zonas de difícil acceso.',
    ],
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'higiene-dental',
    title: 'La importancia de mantener una buena higiene dental',
    subtitle: 'Hábitos diarios para una sonrisa saludable',
    iconName: 'Sparkles',
    summary:
      'Una rutina adecuada de higiene bucal es la base del bienestar oral. La combinación correcta del cepillado dental con el uso regular del hilo dental previene el mal aliento, protege la encía y mantiene la salud de los tejidos que sostienen cada diente.',
    points: [
      'Cepillado metódico al menos dos veces al día con técnica de barrido suave.',
      'Uso imprescindible de hilo o seda dental para limpiar los espacios interdentales.',
      'Limpieza lingual diaria para reducir la carga bacteriana de la boca.',
      'Renovación periódica del cepillo dental cuando las cerdas pierden su forma.',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-24e5485458e2?auto=format&fit=crop&w=900&q=80',
  },
];
