export const getProductById = async(id) =>{
 const res = await fetch(`https://dummyjson.com/products/${id}?limit=0`);
 if(!res.ok){
  throw new Error("Error while fetching data by id")
 }
 const data = await res.json();
 return data
}