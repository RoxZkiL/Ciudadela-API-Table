import { DataGrid } from "@material-ui/data-grid";
import { Container } from "@material-ui/core";

export default function MaterialTable({ props }) {
  const columns = [
    {
      field: "name",
      headerName: "Nombre",
      width: 180,
    },
    {
      field: "magnitude",
      headerName: "Magnitude",
      width: 200,
    },
    {
      field: "isPotentiallyDangerous",
      headerName: "is Dangerous?",
      width: 200,
    },
    {
      field: "minDiameter",
      headerName: "Diámetro Min. (Km)",
      width: 210,
    },
    {
      field: "maxDiameter",
      headerName: "Diámetro Máx. (Km)",
      width: 210,
    },
    {
      field: "orbitalPeriod",
      headerName: "Periodo Orbital (Years)",
      width: 225,
    },
    {
      field: "fistObservation",
      headerName: "Primera Observación",
      width: 215,
    },
    {
      field: "lastObservation",
      headerName: "Última Observación",
      width: 215,
    },
    {
      field: "perihelionDistance",
      headerName: "Perihelio",
      width: 190,
    },
  ];

  const rows = props;

  return (
    <Container
      fixed
      maxWidth="xl"
      style={{ marginTop: 18, marginBottom: 40, paddingBottom: 30 }}
    >
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          autoHeight={true}
          style={{ fontSize: "sm", fontWeight: "bold" }}
          disableSelectionOnClick
          disableEditRows
          variant="striped"
        />
      </div>
    </Container>
  );
}
