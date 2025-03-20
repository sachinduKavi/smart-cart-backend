interface ProductInterface{
    id: string | number,
    name: string, 
    unit_price: number,
    description: string | null,
}


const product_list: Array<ProductInterface> = [
    {
        id: 'cb1234',
        name: "Cheese Buttons Biscuits",
        unit_price: 50,
        description: "This is product 1"
    },
    {
        id: 'mdjam1234',
        name: "MD Jam Strawberry",
        unit_price: 320,
        description: "This is product 2"
    }
]


export {
    product_list,
}
