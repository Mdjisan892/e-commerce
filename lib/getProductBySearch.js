export async function getProductBySearch(product) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${product}`);
    if (!res.ok) {
      throw new Error("Error while search");
    }
    const data = await res.json();
    const {products} = data
    console.log("fetch Product" , products)
    return products;
  }
  