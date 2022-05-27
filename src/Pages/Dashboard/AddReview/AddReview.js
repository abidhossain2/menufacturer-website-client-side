import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddReview.css'

const AddReview = () => {
      const { register, handleSubmit, reset} = useForm();
      const imageKey = "99c649565f481e45dd720b45713d8e87";
      const onSubmit = async data => {
        const img = data.image[0]
        const formData = new FormData();
        formData.append('image',img)
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const imageUrl = result.data.url;
                const reviewer = {
                    img: imageUrl,
                    name: data.name,
                    ratings:data.ratings,
                    feedback:data.detail
                }
                fetch('https://blooming-falls-70895.herokuapp.com/reviews', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    }, 
                    body: JSON.stringify(reviewer)
                })
                .then(res =>res.json())
                .then(feedback => {
                    console.log(feedback)
                    if(feedback.insertedId){
                        toast.success('Feedback successfully added')
                        reset();
                    }
                })
            }
        })
    }
    return (
        <>
            <h3 className='text-center addreview-heading-txt'>Add Review</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='review-form'>
                <input className='review-field' {...register("name")} placeholder="Name" type='text'/> <br />
                <input className='review-field' {...register("ratings")} placeholder="Ratings" type='text'/> <br />
                <textarea className='review-field' {...register("detail")} placeholder="Feedback" type='text'/> <br />
                <input className='review-field' {...register("image")} type="file" /> <br />
                <input className='review-submit-field' type="submit"  value="Submit"/>
            </form>
        </>
    );
};

export default AddReview;