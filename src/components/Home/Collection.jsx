import React from 'react'

const data = [
    {
        id: 1,
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 999,
        rating: 5,
        image: 'https://flowbite.com/docs/images/products/apple-watch.png'

    },
    {
        id: 2,
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 753,
        rating: 5,
        image: 'https://flowbite.com/docs/images/products/apple-watch.png'
        
    },
    {
        id: 3,
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 666,
        rating: 5,
        image: 'https://flowbite.com/docs/images/products/apple-watch.png'
        
    }
]
const Collection = () => {
    return (
        <>
            <section id="sellers">
                <div className="seller container">
                    <h2>Top Sales</h2>
                    <div className=" flex flex-wrap justify-center">

                        {data.map((item, index) => (

                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                                <a href="#">
                                    <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
                                </a>
                                <div class="px-5 pb-5">
                                    <a href="#">
                                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    </a>
                                    <div class="flex items-center mt-2.5 mb-5">
                                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
                <div className="seller container">
                    <h2>New Arrivals</h2>
                    <div className="best-seller">
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $10.23
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle blue" />
                                        <i className="bx bxs-circle brown" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Bag</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $09.28
                                    <div className="colors">
                                        <i className="bx bxs-circle brown" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle green" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Sunglass</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $06.24
                                    <div className="colors">
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle blank" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/FszW12Kc/na4.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $43.67
                                    <div className="colors">
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seller container">
                    <h2>Hot Sales</h2>
                    <div className="best-seller">
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/jS7pSQLf/na4.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Shoes</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $37.24
                                    <div className="colors">
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle black" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $10.23
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle blue" />
                                        <i className="bx bxs-circle brown" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/RhVP7YQk/hs1.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England T-Shirt</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                    <i className="bx bxs-star" />
                                </div>
                                <div className="price">
                                    $15.24
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle red" />
                                        <i className="bx bxs-circle blue" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="best-p1">
                            <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
                            <div className="best-p1-txt">
                                <div className="name-of-p">
                                    <p>PS England Bag</p>
                                </div>
                                <div className="rating">
                                    <i className="bx bxs-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                    <i className="bx bx-star" />
                                </div>
                                <div className="price">
                                    $09.28
                                    <div className="colors">
                                        <i className="bx bxs-circle blank" />
                                        <i className="bx bxs-circle grey" />
                                        <i className="bx bxs-circle brown" />
                                    </div>
                                </div>
                                <div className="buy-now">
                                    <button>
                                        <a href="https://codepen.io/sanketbodke/full/mdprZOq">
                                            Buy Now
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection