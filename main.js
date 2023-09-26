class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  // Método para agregar un nuevo producto
  addProduct(title, description, price, thumbnail, code, stock) {
    // Verificamos si ya existe un producto con el mismo código
    const existingProduct = this.products.find((product) => product.code === code);

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

  // Método para obtener todos los productos
  getProducts() {
    return this.products;
  }

  // Método para obtener un producto por su ID
  getProductById(id) {
    const product = this.products.find((producto) => producto.id === id);

    if (!product) {
      return "Producto no encontrado.";
    } else {
      return product;
    }
  }

  // Método para actualizar un producto por su ID
  updateProductById(id, updatedProduct) {
    const index = this.products.findIndex((producto) => producto.id === id);

    if (index === -1) {
      return "Producto no encontrado.";
    } else {
      this.products[index] = {
        ...this.products[index],
        ...updatedProduct,
      };
      return "Producto actualizado con éxito.";
    }
  }

  // Método para eliminar un producto por su ID
  deleteProductById(id) {
    const index = this.products.findIndex((producto) => producto.id === id);

    if (index === -1) {
      return "Producto no encontrado.";
    } else {
      this.products.splice(index, 1);
      return "Producto eliminado con éxito.";
    }
  }
}

const productos = new ProductManager();

// Primera llamada = arreglo vacío
console.log(productos.getProducts());

try {
  // Agrego productos
  console.log(productos.addProduct("hamburguesa1", "hamburguesa con queso1", 1500, "imagen1", "burger123", 15));
  console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));

  // Prueba de código repetido
  console.log(productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15));

  console.log(productos.getProductById(4));

  // Actualizar un producto
  console.log(productos.updateProductById(1, {
    title: "Nueva Hamburguesa",
    description: "Nueva descripción",
    price: 2000,
  }));

  // Eliminar un producto
  console.log(productos.deleteProductById(2));

} catch (error) {
  console.error(error.message);
}

// Mostrar todos los productos después de las operaciones
console.log(productos.getProducts());
