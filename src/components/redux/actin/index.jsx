// f0r item add to card

export const addCart = (product) =>{

    return{

        type : "ADDITEM",
        payload : product
    }

}

//for Delete  item form Cart

export const delCart = (product)=>{

return{

    type : "DELITEM",
    payload : product


}


}
