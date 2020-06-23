import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import EditProductDialog from '../ProductDialogs/EditProductDialog';
import DeleteProductDialog from '../ProductDialogs/DeleteProductDialog';
import ListProductDialog from '../ProductDialogs/ListProductDialog';
import { StyledTableCell } from './StyledTableCell';

const ProductsTable = ({ products, fetchProducts }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Nome</StyledTableCell>
                        <StyledTableCell align="center">Quantidade</StyledTableCell>
                        <StyledTableCell align="center">Valor</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.nome}</TableCell>
                            <TableCell align="center">{row.quantidade}</TableCell>
                            <TableCell align="center">{row.valor}</TableCell>
                            <TableCell align="center">
                                <ListProductDialog id={row.id} />
                            </TableCell>
                            <TableCell align="center">
                                <EditProductDialog id={row.id} fetchProducts={fetchProducts} />
                            </TableCell>
                            <TableCell align="center">
                                <DeleteProductDialog id={row.id} fetchProducts={fetchProducts} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductsTable;