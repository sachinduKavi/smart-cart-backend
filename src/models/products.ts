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
        description: "Ceylon Biscuits Limited (CBL), ISO 9001:2008 & ISO 22000:2005 certified company, is one of the largest food manufacturing companies in Sri Lanka."
    },
    {
        id: 'mdjam1234',
        name: "MD Jam Strawberry",
        image: "https://img.drz.lazcdn.com/static/lk/p/57a327d3afc137e8532085e0e42d6c95.jpg_720x720q80.jpg",
        unit_price: 320,
        description: "LANKA CANNERIES (PVT) HACCP & ISO 22000:2005 certified company, is one of the largest food manufacturing companies in Sri Lanka."
    }
]


export {
    product_list,
    ProductInterface,
    CartItem,
    BillInterface
}
