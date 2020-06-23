import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText } from '@material-ui/core';
import { fetchProductById, deleteProduct } from '../../utils/functions/requisitions'

export default function DeleteProductDialog({ id, fetchProducts }) {
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState([])
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
    const deleteProd = async () => {
        const response = await deleteProduct(product)
        if (response) {
            handleClose()
            fetchProducts()
        }
    }
    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={() => { handleClickOpen(); fetchProduct() }}>
                Excluir
            </Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogTitle id="alert-dialog-title">{"Confirmar exclusão?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" style={{ fontSize: 30, color: 'black' }}>
                            Essa ação é irreversível,tem certeza que deseja excluir o item:<br />
                            {product.nome}?<br />
                        </DialogContentText>
                    </DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={() => { deleteProd() }} color="primary">
                        Confirmar exclusão
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}