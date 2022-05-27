import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const imageKey = "99c649565f481e45dd720b45713d8e87";
    const onSubmit = async data => {
        const img = data.image[0]
        const formData = new FormData();
        formData.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageUrl = result.data.url;
                    const productInfo = {
                        img: imageUrl,
                        name: data.name,
                        detail: data.detail,
                        minimumOrder: data.minimumOrder,
                        orderQuantity: data.minimumOrder,
                        availableQuantity: data.availableQuantity,
                        price: data.price
                    }
                    fetch('https://dry-wave-47967.herokuapp.com/bikeparts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if(result.insertedId){
                                toast.success('Product successfully Added')
                                reset();
                            }
                            
                        })
                }
            })
    }
    return (
        <div>
                   <h3 className='text-center addreview-heading-txt'>Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='review-form'>
                <input className='review-field' {...register("name")} placeholder="Name" type='text' /> <br />
                <textarea className='review-field' {...register("detail")} placeholder="Description" type='text' /> <br />
                <input className='review-field' {...register("minimumOrder")} placeholder="Minimum Order" type='text' /> <br />
                <input className='review-field d-none' {...register("orderQuantity")} placeholder="Minimum Order" type='text' /> <br />
                <input className='review-field' {...register("availableQuantity")} placeholder="Available Quantity" type='text' /> <br />
                <input className='review-field' {...register("price")} placeholder="Price" type='text' /> <br />
                <input className='review-field' {...register("image")} type="file" /> <br />
                <input className='review-submit-field' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;