import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { fetchProductById, updateProduct } from '../../utils/functions/requisitions'

export default function EditProductDialog({ id, fetchProducts }) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({ nome: '', quantidade: '', valor: '' })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleState = name => event => {
        setProduct({ ...product, [name]: event.target.value });
    };
    const handleClose = () => {
        setOpen(false);
    };
    const fetchProduct = async () => {
        const response = await fetchProductById(id);
        const { status, data } = response;
        if (status === 200) {
            setProduct(data)
        }
    }
    const updateProd = async () => {
        const response = updateProduct(product);
        if (response) {
            handleClose()
            fetchProducts()
        }else{
            return
        }
    }

    return (
        <div>

            <Button variant="outlined" color="primary" onClick={() => { handleClickOpen(); fetchProduct() }}>
                Editar
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="nome"
                        id="nome"
                        label="Nome do produto"
                        type="text"
                        value={product.nome}
                        onChange={handleState('nome')}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="quantidade"
                        id="quantidade"
                        label="Quantidade"
                        type="number"
                        value={product.quantidade}
                        onChange={handleState('quantidade')}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="valor"
                        id="valor"
                        label="Valor"
                        type="number"
                        value={product.valor}
                        onChange={handleState('valor')}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={() => { updateProd() }} color="primary">
                        Editar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}