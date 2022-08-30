import {
  Table,
  Thead,
  Th,
  TableContainer,
  Box,
  Tr,
  Td,
  Tbody,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
} from "@chakra-ui/react";

import {
  ArrowUpDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { useTable, useSortBy, usePagination } from "react-table";

import useColumns from "./DataTableColumns";

export default function DataTable({ props }) {
  const data = props;
  const columns = useColumns();
  const table = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = table;

  return (
    <Box borderWidth="2px" borderRadius="lg" m={4} marginBottom={16}>
      {/* Table */}
      <TableContainer>
        <Table size="lg" variant="striped" {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    <ArrowUpDownIcon
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    />{" "}
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr fontWeight={500} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
        mb={3}
        mt={3}
      >
        <Flex>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>
        <Flex alignItems="center">
          <Text flexShrink="0" mr={8}>
            Página{" "}
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            de{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 7, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
}
