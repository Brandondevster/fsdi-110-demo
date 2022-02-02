
var catalog = [
    {
      _id: "5f40a6baac77a903d8f682c6",
      price: 12.32,
      stock: 13,
      title: "Banana",
      image: "banana.jpeg",
      discount: 5,
      category: "Vegetable",
    },
    {
      _id: "5f40a6ba41d9e5044ced586c",
      price: 22.71,
      stock: 21,
      title: "Strawberry",
      image: "strawberry.jpg",
      discount: 10,
      category: "Fruit",
    },
    {
      _id: "5f40a6baa9e6e22fa1d5fac4",
      price: 32.0,
      stock: 20,
      title: "Orange",
      image: "orange.jpg",
      discount: 0,
      category: "Vegetable",
    },
    {
        _id: "5f40a6baac77a903d8f682c6",
        price: 8.50,
        stock: 13,
        title: "Kiwi",
        image: "kiwi.jpg",
        discount: 5,
        category: "Vegetable",
      },
      {
        _id: "5f40a6ba41d9e5044ced586c",
        price: 3.26,
        stock: 21,
        title: "Pistachio",
        image: "pistachios.webp",
        discount: 10,
        category: "Fruit",
      }
  ];
  

class DataService {
    getCatalog() {
        // connect to server
        // and retrieve the catalog

        // return mock data
        return catalog;
    }
}

export default DataService;