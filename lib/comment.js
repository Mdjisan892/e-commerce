export const getComments = async (id) =>{
    const commentsRes = await fetch(`https://dummyjson.com/comments/post/${id}?limit=0`);
    if(!commentsRes.ok){
        throw new Error("Error while fetching Comments") 
    }
    const {comments} = await commentsRes.json()
    return comments
}