const foods = [
  { id: 1, name: 'Mango Cake', price: 38000, image: '/foods/product1.jpg' },
  { id: 2, name: 'Carrot Cupcake', price: 25000, image: '/foods/product2.jpg' },
  { id: 3, name: 'Chocolate Brownie', price: 30000, image: '/foods/product3.jpg' },
  { id: 4, name: 'Matcha Cake', price: 36000, image: '/foods/product4.jpg' },
  { id: 5, name: 'Cherry Brownie', price: 30000, image: '/foods/product5.jpg' },
  { id: 6, name: 'Cherry Cake', price: 38000, image: '/foods/product6.jpg' },
  { id: 7, name: 'Strawberry Roll', price: 34000, image: '/foods/product7.jpg' },
  { id: 8, name: 'Chocolate Roll', price: 34000, image: '/foods/product8.jpg' },
  { id: 9, name: 'Berry Cookies', price: 28000, image: '/foods/product9.jpg' },
  { id: 11, name: 'Berry Cupcake', price: 25000, image: '/foods/product11.jpg' },
  { id: 12, name: 'Chocolate Cupcakes', price: 27000, image: '/foods/product12.jpg' },
  { id: 13, name: 'Raspberry Loaf Cake', price: 36000, image: '/foods/product13.jpg' },
  { id: 14, name: 'Heart Loaf Cake', price: 36000, image: '/foods/product14.jpg' },
  { id: 15, name: 'Chocolate Cookies', price: 28000, image: '/foods/product15.jpg' },
  { id: 16, name: 'Pink Macarons', price: 30000, image: '/foods/product16.jpg' },
  { id: 17, name: 'Strawberry Tiramisu', price: 38000, image: '/foods/product17.jpg' },
  { id: 18, name: 'Cherry Chocolate Cake', price: 40000, image: '/foods/product18.jpg' },
  { id: 19, name: 'Strawberry Cake', price: 38000, image: '/foods/product19.jpg' },
  { id: 20, name: 'Strawberry Croissant', price: 32000, image: '/foods/product20.jpg' },
  { id: 21, name: 'Berry French Toast', price: 35000, image: '/foods/product21.jpg' },
  { id: 22, name: 'Berry Waffles', price: 35000, image: '/foods/product22.jpg' },
]

export default {
  fetch(request) {
    if (request.method !== 'GET') {
      return Response.json(
        { message: 'Method Not Allowed' },
        { status: 405, headers: { Allow: 'GET' } },
      )
    }

    return Response.json(foods, { status: 200 })
  },
}
