import { Key, useState } from 'react';
import TableCell from "@mui/material/TableCell";
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useAppSelector } from '../../hooks/hooks';
import { StyledTableCell } from './styles';

interface Column {
  id: "id" | "name" | "year";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 120 },
  {
    id: "year",
    label: "Year",
    minWidth: 80,
    align: "right",
  }
];


export const TableWithPagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { colors, isLoading, error, searchText } = useAppSelector(state => state.colorReducer);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredColors = (value: number | undefined) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    return value
      ? colors.filter((item: { id: { toString: () => string | string[]; }; }) => item.id.toString().includes(value.toString()))
      : colors;
  }

  return (
    <>
      <Paper sx={{ maxWidth: "1000px", overflow: "hidden", display: 'flex', flexDirection: 'column', justifyContent: 'center', m:'0 auto' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredColors(searchText)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: { [x: string]: any; id: Key | null | undefined; color: any; }) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.id} style={{ backgroundColor: `${row.color}`}}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={filteredColors(searchText).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </>
  )
}

