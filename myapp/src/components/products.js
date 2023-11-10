import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export function Products(props) {const filteredProducts = productData.filter((product) => {
  const meetsIdCondition = filterConditions.id ? product.id === filterConditions.id : true;
  const meetsNameCondition = filterConditions.name ? product.name === filterConditions.name : true;
  const meetsPriceCondition = filterConditions.maxPrice ? parseInt(product.price) <= filterConditions.price : true;

  return 
  (meetsIdCondition && meetsNameCondition && meetsPriceCondition)
});

    
  return (
  
    <div className='productList'>
      <div key={props.id} className='productCard'>
        <img src={props.image} alt='product-img' className='productImage'></img>
       
        <FaShoppingCart className={"productCard__cart"} />
        <FaRegBookmark className={"productCard__wishlist"} />
        <FaFireAlt className={"productCard__fastSelling"} />

        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
            <div className='productPrice'>₹{props.price}</div>
            <div className='productSales'>{props.totalSales} units sold</div>
          </div>
          <div className='displayStack__2'>
            <div className='productRating'>
              {Array.from({ length: props.rating }, (_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
            <div className='productTime'>{props.timeLeft} days left</div>
          </div>
          <button className="productButton">Add to Cart</button>
        </div>
      </div>
    </div>
    
  );
}