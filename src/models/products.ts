interface ProductInterface{
    id: string | number,
    name: string, 
    unit_price: number,
    description: string | null,
}


const product_list: Array<ProductInterface> = [
    {
        id: 1,
        name: "Chello Drinking yogurt",
        unit_price: 180,
        description: "This is product 1"
    },
    {
        id: 2,
        name: "Cheese Buttons",
        unit_price: 100,
        description: "This is product 2"
    },
    {
        id: 3,
        name: "MD Jam Strawberry",
        unit_price: 480,
        description: "This is product 3"
    }
]


export {
    product_list,
}
