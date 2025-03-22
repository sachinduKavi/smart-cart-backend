import { CartItem } from "../models/products";

function calculateTotalPrice(item_list: Array<CartItem>) : number {
    return item_list.reduce((total, item) => total + item.quantity * item.unit_price, 0)
}


export {
    calculateTotalPrice
}