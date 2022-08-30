export async function loadData() {
  try {
    const API_KEY = process.env.APIKEY;
    const apiData = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`
    );
    const response = await apiData.json();
    const fetchedData = Object.entries(response.near_earth_objects)
      .map((el) => el[1])
      .reduce((a, b) => {
        return a.concat(b);
      }, []);
    const asteroidsObject = fetchedData.map((el) => {
      let isDangerous = 0;
      let nonDangerous = 0;
      fetchedData.forEach((el) =>
        el.is_potentially_hazardous_asteroid ? isDangerous++ : nonDangerous++
      );
      return {
        id: el.id,
        name: el.name.split(" ").slice(1, 4).join(" "),
        magnitude: el.absolute_magnitude_h,
        minDiameter: Math.round(
          el.estimated_diameter.kilometers.estimated_diameter_min
        ),
        maxDiameter: Math.round(
          el.estimated_diameter.kilometers.estimated_diameter_max
        ),
        fistObservation: el.orbital_data.first_observation_date,
        lastObservation: el.orbital_data.last_observation_date,
        aphelionDistance: el.orbital_data.aphelion_distance,
        perihelionDistance: el.orbital_data.perihelion_distance,
        orbitalPeriod: Math.round(el.orbital_data.orbital_period),
        isPotentiallyDangerous: el.is_potentially_hazardous_asteroid
          ? "Yes"
          : "No",
        isDangerous,
        nonDangerous,
      };
    });
    return asteroidsObject;
  } catch (error) {
    console.log(error);
  }
}
