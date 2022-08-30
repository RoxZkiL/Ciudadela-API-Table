import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import DataTable from "../components/Table/DataTable";
import { loadData } from "../lib/load-data";

export default function Home(props) {
  return (
    <>
      <Layout />
      <Chart props={props.dataFromApi} />
      <DataTable props={props.dataFromApi} />
    </>
  );
}

export async function getStaticProps() {
  const dataFromApi = await loadData();
  return { props: { dataFromApi } };
}
