// Calls to Endpoints
export async function leerAguaData() {
  try {
    const res = await fetch(
      "http://escritorios.ieselrincon.es:3306/api/medidas/sensor/2"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const aguaData = await res.json();
    return aguaData;
  } catch (error) {
    console.error(`Error READ DATA AGUA: ${error}`);
    throw error;
  }
}

export async function leerLuzData() {
  try {
    const res = await fetch(
      "http://escritorios.ieselrincon.es:3306/api/medidas/sensor/1"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const luzData = await res.json();
    return luzData;
  } catch (error) {
    console.error(`Error READ DATA LUZ: ${error}`);
    throw error;
  }
}

export async function leerTemperaturaData() {
  try {
    const res = await fetch(
      "http://escritorios.ieselrincon.es:3306/api/medidas/sensor/5"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const temperaturaData = await res.json();
    return temperaturaData;
  } catch (error) {
    console.error(`Error READ DATA TEMPERATURA: ${error}`);
    throw error;
  }
}

export async function leerHumedadData() {
  try {
    const res = await fetch(
      "http://escritorios.ieselrincon.es:3306/api/medidas/sensor/6"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const humedadData = await res.json();
    return humedadData;
  } catch (error) {
    console.error(`Error READ DATA HUMEDAD: ${error}`);
    throw error;
  }
}

export async function leerCo2Data() {
  try {
    const res = await fetch(
      "http://escritorios.ieselrincon.es:3306/api/medidas/sensor/8"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const humedadData = await res.json();
    return humedadData;
  } catch (error) {
    console.error(`Error READ DATA HUMEDAD: ${error}`);
    throw error;
  }
}