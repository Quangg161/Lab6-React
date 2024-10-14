import React from 'react'
import prd1 from '../../assets/imgs/tainghe1.jpg';
import prd2 from '../../assets/imgs/tainghe2.jpg';
import prd3 from '../../assets/imgs/tainghe3.jpg';
import prd4 from '../../assets/imgs/tainghe4.jpg';
import {Link} from 'react-router-dom'

export default function Products({handleAddToCart})  {
  const products = [
    {
      id: 1, 
      prdName : "Tai nghe Bluetooth Edifier W820NB",
      price: 1000000,
      prdImage: prd1,
      description:'Tai nghe bluetooth Edifier W820NB - Khả năng chống ồn vượt trội'
    },
    {
      id: 2, 
      prdName : "Tai nghe Bluetooth Havit H630BT",
      price: 750000,
      prdImage: prd2,
      description:'Tai nghe Bluetooth chụp tai Havit H630BT - Thời trang, cao cấp'
    },
    {
      id: 3, 
      prdName : "Tai nghe Bluetooth Sony WH-CH520",
      price: 1100000,
      prdImage: prd3,
      description:'Tai nghe chụp tai Sony WH-CH520 - Trải nghiệm âm thanh tuyệt vời'
    },
    {
      id: 4, 
      prdName : "Tai nghe Gaming Havit HV-H2232D",
      price: 970000,
      prdImage: prd4,
      description:'Tai nghe chụp tai Gaming Havit HV-H2232D - Phụ kiện đắc lực cho những trận game kinh điển'
    },
  ]
  return (
    <section className='container mx-auto p-3'>
      <h2 className='text-2xl font-bold mb-5'>Danh sách tai nghe</h2>
      <div className='grid grid-cols-4 gap-5'>
        {
          products.map((product) =>{
            return(
              <div key={product.id} className='bg-white shadow-md rounded-lg '>
                <img src={product.prdImage} alt={product.prdName} className='w-80 h-80 object-cover' />
                <h3 className='text-lg font-semibold'>{product.prdName}</h3>
                <p className='text-red-400 font-medium text-lg'>{product.price} VNĐ</p>
                <Link to ={`/detail/${product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                <button onClick={() => {handleAddToCart(product)}} className='w-full block bg-green-500 text-white py-2 rounded-lg'>Thêm vào giỏ hàng</button>
              </div>
            )
          })  
        }
      </div>
    </section>
  )
}