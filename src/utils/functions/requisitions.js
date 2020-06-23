import axios from '../../services/axios';
import { success, failure, warning } from '../../components/Toasts/toasts'

export const fetchProductById = async (id) => {
    const response = await axios.get(`/produto/${id}`);
    const { status, data } = response;
    if (response) {
        return { status, data };
    } else {
        failure('Ops,houve um problema');
    }
}
export const fetchAllProducts = async () => {
    const response = await axios.get('/produtos');
    const { status, data } = response;
    if (response) {
        if (status === 200) {
            return { data }
        } else {
            failure('Ops,houve um problema');
        }

    } else {
        failure('Ops,houve um problema');
    }
}

export const deleteProduct = async (product) => {
    const response = await axios.delete("/produto", {
        data: product
    });
    if (response) {
        const { status, data } = response;
        if (status === 200) {
            success(data);
            return true;
        } else {
            failure('Ops,houve um problema com a sua requisição');
            return false;
        }
    } else {
        failure('Ops,houve um problema com a sua requisição');
        return false;
    }
}

export const updateProduct = async (product) => {
    if (!product.nome || !product.quantidade || !product.valor || !product.id ||
        product.nome === "" || product.quantidade === "" || product.valor === "" || product.id === ""
        || product.quantidade === 0 || product.valor === 0
    ) {
        warning('Preencha todos os campos!');
        return false;
    } else {
        const response = await axios.put(`/produto`, product);
        const { status, data } = response;
        if (status === 200) {
            success(data)
            return true;
        } else {
            failure('Ops,houve um problema');
            return false;
        }
    }
}
export const saveProduct = async (product) => {
    if (!product.nome || !product.quantidade || !product.valor) {
        warning('Preencha todos os campos!');
        return false;
    } else {
        const response = await axios.post('/produto', product);
        const { status, data } = response;
        if (response) {
            if (status === 200) {
                success(data)
                return true;
            } else {
                failure('Ops houve um problema')
                return false;
            }
        } else {
            failure('Ops houve um problema')
            return false;
        }
    }
}