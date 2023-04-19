class ProductManager {
    constructor (){
        this.products = []
    }
    getProducts(){
        console.log(this.products)
        return this.products
    }

    getProductById(productId){
        let one = this.products.find (each=> each.id === productId )
        if (one){
            console.log(one)
            return one
        } 
            console.log('Not Found')
            return null

            
    }
    addProduct({title, description, price, thumbnail, code, stock}) {
        let id
        if (this.products.length === 0) {
            id = 1
        }
        else {
            let lastEvent = this.products[this.products.length-1]
            id = lastEvent.id + 1
        }
        let product = {title, description, price, thumbnail, code, stock, id}
        this.products.push(product)
    }
}


let productos = new ProductManager ()

productos.addProduct({
    title:"producto prueba", 
    description:"Este es un producto", 
    price:200, 
    thumbnail:"Sin imagen", 
    code:"abc123", 
    stock:25
    })

productos.addProduct({
        title:"producto prueba1", 
        description:"Este es un producto2", 
        price:2000, 
        thumbnail:"Sin imagen", 
        code:"abc1235", 
        stock:30
        })

productos.addProduct({
        title:"producto prueba12", 
        description:"Este es un producto23", 
        price:20001, 
        thumbnail:"Sin imagen", 
        code:"abc12356", 
        stock:301
        })

productos.getProducts()
productos.getProductById(3)