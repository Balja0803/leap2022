class Car {
  constructor(id, model, brand, price, image) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }
}
fetch("http://localhost:3333/api/cars")
  .then((res) => res.json())
  .then((res) => {
    res.map((car, index) => {
      const test = new Car(car.id, car.model, car.brand, car.price);
      console.log(test);
    });
  });
