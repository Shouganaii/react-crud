import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField } from '@material-ui/core';
import { fetchProductById } from '../../utils/functions/requisitions'

export default function ListProductDialog({ id }) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({ nome: '', quantidade: '', valor: '' })
    const handleClickOpen = () => {
        setOpen(true);
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
    return (
        <div>

            <Button variant="outlined" color="primary" onClick={() => { handleClickOpen(); fetchProduct() }}>
                Listar
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
                        disabled
                        margin="dense"
                        name="nome"
                        id="nome"
                        type="text"
                        value={product.id}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        name="nome"
                        id="nome"
                        label="Nome do produto"
                        type="text"
                        value={product.nome}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        name="quantidade"
                        id="quantidade"
                        label="Quantidade"
                        type="number"
                        value={product.quantidade}
                        fullWidth
                    />
                    <TextField
                        disabled
                        margin="dense"
                        name="valor"
                        id="valor"
                        label="Valor"
                        type="number"
                        value={product.valor}
                        fullWidth
                    />
                </DialogContent>

            </Dialog>
        </div>
    );
}