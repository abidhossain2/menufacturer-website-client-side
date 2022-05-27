import React  from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import './ManageProduct.css'
import ProductTable from './ProductTable';

const ManageProduct = () => {

    const { data: allProducts, isLoading, refetch } = useQuery('manageproduct', () => fetch('https://blooming-falls-70895.herokuapp.com/bikeParts').then(res => res.json()))
    if (isLoading) {
        return <Loader></Loader>
    }
   
    return (
        <>
            <div>
                {
                    allProducts.map(product => <ProductTable
                    key={product._id}
                    product={product}
                    refetch={refetch}
                    ></ProductTable>)
                }
            </div>
        </>
    );
};

export default ManageProduct;