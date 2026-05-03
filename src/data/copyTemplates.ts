import { HolidayTemplate } from './types';

export const HOLIDAYS: Record<string, HolidayTemplate> = {
  navidad: {
    label: "Navidad",
    openings: [
      "¡La magia de la Navidad ya está aquí!",
      "¿Aún no tienes el regalo perfecto?",
      "Esta temporada, regala algo inolvidable.",
      "Navidad es compartir momentos especiales.",
      "¡Haz que esta Navidad sea mágica!"
    ],
    bodies: [
      "Si buscas {k1}, tenemos la solución ideal. Con {k2}, podrás disfrutar de {k3} como nunca antes.",
      "Eleva tu {k1} con nuestra propuesta única. La combinación de {k2} y {k3} es simplemente perfecta.",
      "¿Te imaginas un {k1} que incluya {k2}? Ahora es posible gracias a {k3}.",
      "Simplificamos tu búsqueda de {k1}. Nuestra promesa es {k2} con un toque de {k3}."
    ],
    hashtags: ["#Navidad", "#RegaloIdeal", "#Fiestas", "#MagiaNavideña", "#OfertasNavidad"]
  },
  san_valentin: {
    label: "San Valentín",
    openings: [
      "¡El amor está en el aire (y en los detalles)!",
      "Sorprende a esa persona especial.",
      "Amor es... compartir momentos únicos.",
      "Dice más que mil palabras.",
      "Celebra el amor con estilo."
    ],
    bodies: [
      "Este San Valentín, deja que {k1} hable por ti. Con {k2}, tu {k3} será inolvidable.",
      "Porque {k1} merece lo mejor, te traemos {k2} junto a {k3}.",
      "Encuentra la pareja perfecta entre {k1} y {k2}. El resultado es {k3}.",
      "Haz que lata su corazón con {k1}. Combinamos {k2} para que brille su {k3}."
    ],
    hashtags: ["#SanValentin", "#Amor", "#DíaDeLosEnamorados", "#RegaloConAmor", "#LoveIsAllDeep"]
  },
  black_friday: {
    label: "Black Friday",
    openings: [
      "¡LA OFERTA QUE ESPERABAS!",
      "Solo por tiempo limitado.",
      "No dejes escapar esta oportunidad.",
      "Precios locos, stock limitado.",
      "¡El ahorro más grande del año!"
    ],
    bodies: [
      "Aprovecha {k1} al mejor precio. Nuestra oferta en {k2} es líder en {k3}.",
      "¿Buscas {k1}? Hoy es el día. Consigue {k2} y {k3} con descuentos increíbles.",
      "Renueva tu {k1} sin gastar de más. Con {k2} y {k3}, el ahorro es real.",
      "La liquidación total de {k1} ha llegado. No te pierdas {k2} y {k3}."
    ],
    hashtags: ["#BlackFriday", "#Ofertas", "#Descuentos", "#Ahorro", "#ShoppingTime"]
  },
  dia_de_la_madre: {
    label: "Día de la Madre",
    openings: [
      "Para la mujer más importante de tu vida.",
      "Mamá se merece lo mejor.",
      "Haz sonreír a mamá en su día.",
      "Un detalle tan único como ella.",
      "Dile cuánto la quieres con un regalo."
    ],
    bodies: [
      "Ella siempre cuida tu {k1}, ahora cuida su {k2} con {k3}.",
      "Regálale {k1} a mamá. Nada supera la combinación de {k2} y {k3}.",
      "Para esa mamá que ama {k1}, traemos {k2} con la esencia de {k3}.",
      "Celebramos su amor con {k1}. Sorpréndela con {k2} y {k3}."
    ],
    hashtags: ["#DiaDeLaMadre", "#RegaloParaMama", "#AmorDeMadre", "#MamaMereceTodo"]
  },
  halloween: {
    label: "Halloween",
    openings: [
      "¡Precios de miedo!",
      "No dejes que te asuste el precio.",
      "Una oferta terroríficamente buena.",
      "Dulce o truco... nosotros elegimos regalo.",
      "Prepárate para una noche espeluznante."
    ],
    bodies: [
      "Transforma tu {k1} en algo legendario. Con {k2}, sobrevivirás a {k3}.",
      "¿Miedo a {k1}? Pierde el temor con {k2} y su increíble {k3}.",
      "Decoramos tu {k1} con toques de {k2} y el misterio de {k3}.",
      "El truco está en {k1}. El trato es darte {k2} con esencia de {k3}."
    ],
    hashtags: ["#Halloween", "#SpookySeason", "#OfertasDeMiedo", "#HalloweenVibes"]
  },
  verano: {
    label: "Temporada de Verano",
    openings: [
      "¡Llegó el sol!",
      "Prepárate para las vacaciones.",
      "Frescura máxima para tus días.",
      "Vive el verano al máximo.",
      "No te quedes bajo la sombra."
    ],
    bodies: [
      "Refresca tu {k1} este verano. Con {k2} y {k3}, el calor no será problema.",
      "Tu maleta no está lista sin {k1}. Vive {k2} con la libertad de {k3}.",
      "El verano sabe a {k1}. Acompáñalo con {k2} para un {k3} ideal.",
      "Disfruta del sol con {k1}. Nuestra edición {k2} trae lo mejor de {k3}."
    ],
    hashtags: ["#Verano", "#VibrasDeVerano", "#Vacaciones", "#SolYPlaya", "#SummerVibes"]
  }
};
