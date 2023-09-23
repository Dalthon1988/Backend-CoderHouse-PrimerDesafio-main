class ProductManager {
    constructor() {
      this.products = [];
    }
  
    static id = 0;
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Verificamos si ya existe un producto con el mismo código
      const existingProduct = this.products.find((product) => product.code === code);
        //Aca agrego el throw new Error que pediste en la respuesta.
      if (existingProduct) {
        throw new Error(`El código ${code} está repetido.`);
      } else {
        ProductManager.id++;
        const newProduct = {
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
          id: ProductManager.id,
        };
        this.products.push(newProduct);
        return `Producto agregado con éxito. ID del producto: ${newProduct.id}`;
      }
    }
  
    getProduct() {
      return this.products;
    }
  
    existe(id) {
      return this.products.find((producto) => producto.id === id);
    }
  
    getProductById(id) {
      const product = this.existe(id);
  
      if (!product) {
        return "Producto no encontrado.";
      } else {
        return product;
      }
    }
  }
  
  const productos = new ProductManager();
  
  // Primera llamada = arreglo vacío
  console.log(productos.getProduct());
  
  try {
    // Agrego productos
    console.log(productos.addProduct("hamburguesa1", "hamburguesa con queso1", 1500, "imagen1", "burger123", 15));
    console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));
  
    // Prueba de código repetido
    console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));
  
    console.log(productos.getProductById(4));
  } catch (error) {
    console.error(error.message);
  }
  