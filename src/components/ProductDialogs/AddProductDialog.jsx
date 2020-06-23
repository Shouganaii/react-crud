import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { saveProduct } from '../../utils/functions/requisitions'
export default function AddProductDialog({ fetchProducts }) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({ nome: '', quantidade: '', valor: '' })
    const handleClickOpen = ({ fetchProducts }) => {
        setOpen(true);
    };
    const handleState = name => event => {
        setProduct({ ...product, [name]: event.target.value });
    };
    const handleClose = () => {
        setOpen(false);
    };

    const saveProd = async () => {
        const response = await saveProduct(product);
        if (response) {
            handleClose()
            fetchProducts()
        }
    }
    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Adicionar produtos
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
                    <Button onClick={() => { saveProd() }} color="primary">
                        Adicionar
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}