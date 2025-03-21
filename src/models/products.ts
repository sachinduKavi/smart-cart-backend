interface ProductInterface{
    id: string | number,
    name: string, 
    image: string,
    unit_price: number,
    description?: string | null,
}


interface CartItem extends ProductInterface{
    quantity: number,
}


interface BillInterface {
    item_list: Array<CartItem>,
    total: number
}

const product_list: Array<ProductInterface> = [
    {
        id: 'cb1234',
        name: "Cheese Buttons Biscuits",
        image: "https://www.ranjanlanka.lk/src/item/1124169058.png?reload=598",
        unit_price: 50,
        description: "This is product 1"
    },
    {
        id: 'mdjam1234',
        name: "MD Jam Strawberry",
        image: "https://img.drz.lazcdn.com/static/lk/p/57a327d3afc137e8532085e0e42d6c95.jpg_720x720q80.jpg",
        unit_price: 320,
        description: "This is product 2"
    }
]


export {
    product_list,
    ProductInterface,
    CartItem,
    BillInterface
}
