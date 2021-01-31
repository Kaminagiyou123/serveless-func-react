import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'

const SingleProduct = () => {
    const[loading,setLoading]=useState(true)
    const[product,setProduct]=useState(null)
    const {productID}= useParams()
  
    const fetchData=async()=>{
        try{ 
        const {data}=await axios.get(`/api/product?id=${productID}`)
        console.log(data)
        setProduct(data)
        

        }catch(error){
            console.log(error)
        }
    setLoading(false)
    }

    useEffect(()=>fetchData(),[])
    if (loading){
        return <section className='section-center'>Loading...</section>
    }
    const {fields}=product
    const{name,description,price,image}=fields
    return (
        <section className='section section-center'>
            <Link to ='/' className='link'> back home</Link>
            <div>
                <div className='title'>
                    <h2>{name}</h2>
                    <div className='title-underline'></div>
                    <article className='single-product'>
                        <img className='single-product-img' src={image[0].url} alt={name}/>
                    <div>
                        <h5>{name}</h5>
                        <h5 className='price'>${price}</h5>
                        <p>{description}</p>
                    </div>
                    </article>
                    
                </div>
            </div>
        </section>
    )
}

export default SingleProduct
