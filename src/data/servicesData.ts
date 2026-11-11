import { DentalService } from '../types';

export const SERVICES_DATA: DentalService[] = [
  {
    id: 'odontologia-preventiva',
    number: '01',
    name: 'Odontología Preventiva',
    badgeLabel: 'Cuidado y Preservación',
    shortDescription: 'Se enfoca en prevenir enfermedades bucales y mantener una buena salud oral.',
    detailedDescription:
      'La Odontología Preventiva constituye el primer eslabón en el cuidado de la cavidad bucal. Su propósito fundamental es anticiparse a la aparición de alteraciones orales mediante valoraciones clínicas periódicas, remoción de placa y profilaxis, fomentando hábitos de autocuidado sostenibles.',
    treatments: [
      'Limpieza dental',
      'Revisiones odontológicas',
      'Prevención de caries',
      'Orientación sobre higiene bucal',
    ],
    focusHighlights: [
      'Detección oportuna de factores de riesgo',
      'Técnicas personalizadas de cepillado e hilo dental',
      'Monitoreo continuo de esmalte y encías',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'operatoria-dental',
    number: '02',
    name: 'Operatoria Dental',
    badgeLabel: 'Restauración Estructural',
    shortDescription:
      'Se encarga de tratar los dientes afectados por caries o daños en su estructura, buscando recuperar su función y apariencia.',
    detailedDescription:
      'El área de Operatoria Dental interviene de manera precisa en los órganos dentarios comprometidos por procesos cariosos, traumatismos o desgaste. Emplea biomateriales restauradores modernos para devolver tanto la anatomía funcional como la armonía estética a las piezas dentales.',
    treatments: [
      'Eliminación de caries',
      'Restauraciones dentales',
      'Resinas',
      'Reconstrucción de dientes dañados',
    ],
    focusHighlights: [
      'Aislamiento y remoción selectiva de tejido cariado',
      'Adhesión con resinas compuestas de alta resistencia',
      'Restablecimiento de la función masticatoria y oclusión',
    ],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'periodoncia',
    number: '03',
    name: 'Periodoncia',
    badgeLabel: 'Salud Periodontal',
    shortDescription:
      'Se encarga de prevenir, diagnosticar y tratar enfermedades que afectan las encías y los tejidos que sostienen los dientes.',
    detailedDescription:
      'La Periodoncia se dedica a la preservación del aparato de soporte dental (encía, ligamento periodontal, cemento radicular y hueso alveolar). Su abordaje clínico frena la progresión de la inflamación bacteriana y estabiliza los tejidos de inserción para evitar la movilidad o pérdida de piezas.',
    treatments: [
      'Tratamiento de gingivitis',
      'Tratamiento periodontal',
      'Limpieza profunda',
      'Atención de enfermedades de las encías',
    ],
    focusHighlights: [
      'Raspado y alisado radicular minucioso',
      'Control de bolsas periodontales y sangrado',
      'Mantenimiento para la estabilidad de los tejidos de soporte',
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'endodoncia',
    number: '04',
    name: 'Endodoncia',
    badgeLabel: 'Terapia Pulpar',
    shortDescription:
      'Es el área encargada de tratar problemas que afectan la pulpa dental (tejido interno del diente donde se encuentran los nervios y vasos sanguíneos).',
    detailedDescription:
      'La Endodoncia atiende procesos inflamatorios o infecciosos que alcanzan el tejido pulpar y el sistema de conductos radiculares. Su objetivo principal es salvar la pieza dental natural en la boca mediante una limpieza, desinfección y sellado hermético tridimensional de los conductos.',
    treatments: [
      'Tratamiento de conductos',
      'Atención de infecciones pulpares',
      'Tratamiento de dientes con daño pulpar',
    ],
    focusHighlights: [
      'Alivio de dolor originado por pulpitis o abscesos',
      'Conformación e irrigación química de conductos',
      'Obturación biocompatible para la conservación dental',
    ],
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'cirugia-bucal',
    number: '05',
    name: 'Cirugía Bucal',
    badgeLabel: 'Procedimientos Quirúrgicos',
    shortDescription:
      'Comprende procedimientos quirúrgicos realizados en la cavidad oral para solucionar diferentes problemas dentales.',
    detailedDescription:
      'La Cirugía Bucal engloba intervenciones clínicas y maniobras quirúrgicas menores efectuadas bajo protocolos rigurosos de asepsia y anestesia local. Se orienta a resolver condiciones que requieren la extracción cuidadosa de órganos dentarios o resolución de anomalías óseas y de tejidos blandos.',
    treatments: [
      'Extracciones dentales',
      'Extracción de terceros molares',
      'Procedimientos quirúrgicos bucales',
    ],
    focusHighlights: [
      'Técnicas quirúrgicas guiadas y preservación ósea',
      'Manejo de muelas del juicio retenidas o impactadas',
      'Protocolos de recuperación y seguimiento postoperatorio',
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'protesis-dental',
    number: '06',
    name: 'Prótesis Dental',
    badgeLabel: 'Rehabilitación y Estética',
    shortDescription:
      'Busca recuperar la función y estética de la boca mediante la sustitución de dientes perdidos o estructuras dentales dañadas.',
    detailedDescription:
      'El área de Prótesis Dental rehabilita la dentición cuando se ha producido la pérdida parcial o total de piezas dentales. Diseña y adapta aparatologías protésicas y coberturas coronarias personalizadas que restauran el plano oclusal, la fonética y el soporte facial.',
    treatments: [
      'Prótesis parciales',
      'Prótesis totales',
      'Coronas dentales',
      'Rehabilitación protésica',
    ],
    focusHighlights: [
      'Recuperación de la capacidad masticatoria integral',
      'Materiales cerámicos y acrílicos de alta biocompatibilidad',
      'Diseño anatómico adaptado a la morfología bucal individual',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'odontopediatria',
    number: '07',
    name: 'Odontopediatría',
    badgeLabel: 'Atención Infantil',
    shortDescription:
      'Se especializa en la atención de la salud bucal de bebés, niños y adolescentes.',
    detailedDescription:
      'La Odontopediatría acompaña el desarrollo bucodental desde la primera infancia hasta la adolescencia. Combina conocimientos clínicos específicos de la dentición temporal ("de leche") y mixta con un enfoque empático, generando experiencias positivas en el entorno odontológico.',
    treatments: [
      'Revisiones dentales infantiles',
      'Prevención de caries',
      'Limpiezas',
      'Restauraciones infantiles',
      'Atención odontológica preventiva',
    ],
    focusHighlights: [
      'Abordaje psicológico adaptado a cada etapa de crecimiento',
      'Preservación de espacios para la erupción de dientes permanentes',
      'Educación preventiva temprana junto a madres y padres de familia',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-38d781b0a701?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'radiologia-bucal',
    number: '08',
    name: 'Radiología Bucal',
    badgeLabel: 'Diagnóstico por Imagen',
    shortDescription:
      'Utiliza estudios radiográficos para observar estructuras dentales y óseas que no pueden examinarse completamente a simple vista.',
    detailedDescription:
      'La Radiología Bucal es el pilar de apoyo diagnóstico esencial para todas las especialidades odontológicas. A través de tecnología de imagenología dental, permite visualizar el estado de raíces, hueso periapical, dientes retenidos y relaciones anatómicas con mínima exposición radiológica.',
    isStudiesList: true,
    treatments: [
      'Radiografías periapicales',
      'Radiografías panorámicas, si están disponibles',
      'Estudios radiográficos para diagnóstico',
    ],
    focusHighlights: [
      'Inspección nítida de estructuras radiculares y óseas',
      'Soporte clave para diagnósticos clínicos precisos',
      'Protocolos estandarizados de bioseguridad radiológica',
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'ortodoncia',
    number: '09',
    name: 'Ortodoncia',
    badgeLabel: 'Alineación Dental y Maxilar',
    shortDescription:
      'Se encarga de diagnosticar y tratar alteraciones en la posición de los dientes y las relaciones entre los maxilares.',
    detailedDescription:
      'La Ortodoncia estudia, previene y corrige las maloclusiones y discrepancias esqueletales o dentarias. A través de aparatos fijos o removibles, guía los dientes a su posición correcta, favoreciendo una mordida equilibrada, una óptima higiene y la estética de la sonrisa.',
    treatments: [
      'Valoración ortodóntica',
      'Tratamiento con aparatología',
      'Corrección de malposiciones dentales',
    ],
    focusHighlights: [
      'Estudio cefalométrico y diagnóstico de la oclusión',
      'Sistemas ortodónticos fijos y biomecánica dental',
      'Alineación funcional y mejoría en la distribución de cargas masticatorias',
    ],
    image: 'https://images.unsplash.com/photo-1572970724816-724a7372f75a?auto=format&fit=crop&w=1000&q=80',
  },
];
