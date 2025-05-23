import { leerLuzData, leerAguaData, leerTemperaturaData, leerHumedadData } from "../../Apis/sensoresAPI";

export const obtenerDatosSensores = async (id) => {
  try {
    const [agua, luz, temperatura, humedad] = await Promise.all([
      leerAguaData(),
      leerLuzData(),
      leerTemperaturaData(),
      leerHumedadData(),
      //leerCo2Data(),
    ]);

    return {
      agua: procesarDatosDiarios(agua),
      luz: procesarDatosDiarios(luz),
      temperatura: ordenadorDatos(temperatura),
      humedad: ordenadorDatos(humedad),
      //dioxido : ordenadorDatos(dioxido)
    };
  } catch (error) {
    console.error("Error al obtener los datos de los sensores:", error);
    throw error;
  }
};

export const procesarDatosDiarios = (data) => {
  const datosPorDia = {};

  // Agrupar los datos por día y seleccionar el último registro del día
  data.forEach((item) => {
    const fecha = new Date(item.fecha);
    const dia = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()}`;

    // Si ya existe un registro para este día, comparamos las horas
    if (datosPorDia[dia]) {
      const fechaExistente = new Date(datosPorDia[dia].fecha);
      if (fecha > fechaExistente) {
        datosPorDia[dia] = {
          fecha: item.fecha,
          medidas: Number.parseFloat(item.medidas),
        };
      }
    } else {
      // Si no existe, lo agregamos
      datosPorDia[dia] = {
        fecha: item.fecha,
        medidas: Number.parseFloat(item.medidas),
      };
    }
  });

  // Convertir el objeto a un array y ordenarlo por fecha
  const datosDiarios = Object.keys(datosPorDia)
    .map((dia) => ({
      fecha: dia,
      medidas: datosPorDia[dia].medidas,
    }))
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  // Calcular el medidas diario
  const medidasDiario = datosDiarios.map((item, index) => {
    if (index === 0) {
      return { fecha: item.fecha, medidasDiario: item.medidas };
    } else {
      const medidasAnterior = datosDiarios[index - 1].medidas;
      return {
        fecha: item.fecha,
        medidasDiario: item.medidas - medidasAnterior,
      };
    }
  });

  return {
    labels: medidasDiario.map((item) => item.fecha),
    medidas: medidasDiario.map((item) => item.medidasDiario),
  };
};

export function ordenadorDatos(data) {
  const dataOrdenada = data.sort((a, b) => {
    new Date(a.fecha) - new Date(b.fecha);
  });
  return dataOrdenada.at(-1);
}
