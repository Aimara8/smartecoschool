import { leerTemperaturaData } from "../../Apis/sensores";

const Sensores = () => {
  const [temperaturaData, setTemperaturaData] = useState({
    labels: [],
    medidas: [],
  });
  const [humedadData, sethumedadData] = useState({ labels: [], medidas: [] });
  const [error, setError] = useState(null);

  const procesarDatosDiarios = useCallback((data) => {
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
        return { fecha: item.fecha, medidasDiario: 0 }; // El primer día no tiene medidas diario
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
  }, []);

  useEffect(() => {
    setTemperaturaData(leerTemperaturaData);
  }, [procesarDatosDiarios]);

  return (
    <div>
      <h1>Sensor Data</h1>
      <p>{temperaturaData.labels}</p>
    </div>
  );
};

export default Sensores;
