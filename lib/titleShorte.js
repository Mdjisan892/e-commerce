export function shortTitle (name , maxTitle){
    if(name.length > maxTitle){
     return name.substring(0,maxTitle) + " ..."
    }
    return name
}