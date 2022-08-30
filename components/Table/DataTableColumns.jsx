import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Magnitud",
        accessor: "magnitude",
      },
      {
        Header: "Diámetro Min. (Km)",
        accessor: "minDiameter",
      },
      {
        Header: "Diámetro Max. (Km)",
        accessor: "maxDiameter",
      },
      {
        Header: "Periodo Orbital (Years)",
        accessor: "orbitalPeriod",
      },
      {
        Header: "Primera Observación",
        accessor: "fistObservation",
      },
      {
        Header: "Última Observación",
        accessor: "lastObservation",
      },
      {
        Header: "Perihelio",
        accessor: "perihelionDistance",
      },
      {
        Header: "is Dangerous?",
        accessor: "isPotentiallyDangerous",
      },
    ],
    []
  );

  return columns;
}
