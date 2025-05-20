import React from 'react'

const Sensores = () => {

    const [temperaturaData, settemperaturaData] = useState({ labels: [], medidas: [] });
    const [humedadData, sethumedadData] = useState({ labels: [], medidas: [] });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null); // Reiniciar el estado de error
            try {
                // Obtener datos de temperatura y humedad
                const response = await axios.get("http://escritorios.ieselrincon.es:3306/api/medidas");
                const luzDatosProcesados = procesarDatosDiarios(response.data.filter((temp) => {
                    return temp.idSensor == 5
                }));

                const aguaDatosProcesados = procesarDatosDiarios(response.data.filter((hum) => {
                    return hum.idSensor == 6
                }));


                settemperaturaData(luzDatosProcesados)
                sethumedadData(aguaDatosProcesados)
            } catch (error) {
                setError("Error al cargar los datos. Intenta nuevamente más tarde.");
                console.error("Error al obtener los datos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [procesarDatosDiarios]);
    return (
        <div>
        </div>
    )
}

export default Sensores