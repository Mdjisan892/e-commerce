export const getAllProductsCatagory = async () => {
    const res  = await fetch(
        'https://dummyjson.com/products?limit=0'
        ,{next : {revalidate : 3600}}
    )
    if(!res.ok){
        throw new Error("Unable to Fetching Data")
    }
    const data = await res.json()
    return data
};