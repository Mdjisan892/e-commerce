'use client'
import { useCart } from "../../../../lib/ContexApi";

const CartButton = ({ setOpen }) => {
 const {cartItem} = useCart()
 const totalQuantity = cartItem.reduce((total, item) => total + item.quantity, 0);
 
  const handleCart = () => {
    setOpen(true)
  };

  return (
    <button onClick={handleCart} className=" outline-none border-none w-[40px] h-[40px] rounded-full flex items-center justify-center text-white  cursor-pointer hover:scale-125 bg-teal-700 group transition-all ease-in-out duration-200">
      <p className="absolute px-2 ml-[2rem] z-10 -mt-7 text-black bg-gray-400 rounded-full">
        {totalQuantity}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="text-xl -ml-[0.2rem]">
        <circle r="1" cy="21" cx="9"></circle>
        <circle r="1" cy="21" cx="20"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    </button>
  );
};

const CloseBtn = () => {

  return (
    <div className="absolute right-[0.75rem]">
      <svg className="text-red-400 hover:text-black"
        viewBox="0 0 384 512"
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        ></path>
      </svg>
    </div>
  )
}

const AddToCartBtn =  ({product}) => {
  const {addCart} = useCart()
  const handleAddBtn= () =>{
 
    addCart({
      id: product.id,
      image: product.thumbnail,
      name: product.title,
      price: product.price,
    })
  }
  return (<button
  onClick={handleAddBtn}
    className="hover:product-animation hover:cart-animation relative w-[150px] h-[47px] text-white bg-teal-700 rounded-lg shadow-lg hover:bg-teal-800 transition-all duration-300 ease-in-out flex items-center justify-center">
    <svg
      className="cart z-[2]"
      fill="white"
      viewBox="0 0 576 512"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
    ADD TO CART
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 640 512"
      className="product absolute w-[12px] rounded-[3px] left-[20px] bottom-[23px] opacity-0 z-[1] fill-[#d3d3d3] transition-opacity "
    >
      <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
    </svg>
  </button>)
}

const BuyButton = () => {
  return (<button className="hover:product-animation hover:cart-animation relative w-[150px] h-[47px] text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 ease-in-out flex items-center justify-center">
    <svg
      className="cart z-[2]"
      fill="white"
      viewBox="0 0 576 512"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
    BUY NOW...
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 640 512"
      className="product absolute w-[12px] rounded-[3px] left-[27px] bottom-[23px] opacity-0 z-[1] fill-[#d3d3d3] transition-opacity"
    >
      <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
    </svg>
  </button>)
}

const AddtoCartSvgButton = ({product}) => {
  const {addCart} = useCart()
  const handleAddBtn= () =>{
    addCart({
      id: product.id,
      image: product.thumbnail,
      name: product.title,
      price: product.price,
    })
   console.log("add to cart")
  }
  return (
     <button
      onClick={handleAddBtn}
      className="p-2 transition duration-200 bg-gray-200 rounded-full cursor-pointer hover:bg-orange-300">
      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 20 20">
        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
      </svg>
    </button>
  );
};

export { CartButton, CloseBtn, AddToCartBtn, BuyButton, AddtoCartSvgButton }