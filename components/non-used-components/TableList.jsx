import React, { useState } from "react";
import {
  Table,
  Thead,
  Th,
  TableContainer,
  Box,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";

import TablePaginated from "./TablePaginated";

export default function TableList({ props }) {
  //Paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [asteroidsPerPage, _setAsteroidsPerPage_] = useState(7);
  const LastAsteroidIndex = currentPage * asteroidsPerPage;
  const FirstAsteroidIndex = LastAsteroidIndex - asteroidsPerPage;
  const currentAsteroids = props.slice(FirstAsteroidIndex, LastAsteroidIndex);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Table */}
      <Box borderWidth="2px" borderRadius="lg" m={4}>
        <TableContainer>
          <Table size="lg" variant="striped">
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Magnitud</Th>
                <Th>Diámetro Min.</Th>
                <Th>Diámetro Max.</Th>
                <Th>Periodo Orbital</Th>
                <Th>Primera Observación</Th>
                <Th>Última Observación</Th>
                <Th>Perihelio</Th>
                <Th isNumeric>Is Dangerous?</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentAsteroids.map((asteroids) => (
                <Tr key={asteroids.id}>
                  <Td>{asteroids.name}</Td>
                  <Td>{asteroids.magnitude}</Td>
                  <Td>{asteroids.minDiameter}</Td>
                  <Td>{asteroids.maxDiameter}</Td>
                  <Td>{asteroids.orbitalPeriod}</Td>
                  <Td>{asteroids.fistObservation}</Td>
                  <Td>{asteroids.lastObservation}</Td>
                  <Td>{asteroids.perihelionDistance}</Td>
                  <Td isNumeric>{asteroids.isPotentiallyDangerous}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {/*Paginated*/}
        {props.length > 8 && (
          <TablePaginated
            asteroidsPerPage={asteroidsPerPage}
            allAsteroids={props.length}
            paginated={paginated}
            currentPage={currentPage}
          />
        )}
      </Box>
    </>
  );
}
