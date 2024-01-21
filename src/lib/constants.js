export const FORMAT12 = "12H";
export const FORMAT24 = "24H";

export const SPANISHTIME = {
    months:
      "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
        "_"
      ),
    monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
    monthsParseExact: true,
    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D [de] MMMM [de] YYYY",
      LLL: "D [de] MMMM [de] YYYY HH:mm",
      LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
    },
    calendar: {
      sameDay: "[Hoy a] LT",
      nextDay: "[Mañana a] LT",
      nextWeek: "dddd [a] LT",
      lastDay: "[Ayer a] LT",
      lastWeek: "dddd [pasado a] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "en %s",
      past: "hace %s",
      s: "unos segundos",
      m: "un minuto",
      mm: "%d minutos",
      h: "una hora",
      hh: "%d horas",
      d: "un día",
      dd: "%d días",
      M: "un mes",
      MM: "%d meses",
      y: "un año",
      yy: "%d años",
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: function (number) {
      return number + (number === 1 ? "º" : "º");
    },
    meridiemParse: /AM|PM/,
    isPM: function (input) {
      return input.toUpperCase() === "PM";
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? "AM" : "PM";
    },
    week: {
      dow: 1, // Lunes es el primer día de la semana.
      doy: 4, // Se utiliza para determinar la primera semana del año.
    },
  }