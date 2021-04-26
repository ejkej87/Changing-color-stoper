// const baseURL = 'https://api.punkapi.com/v2/beers/'

// const getBeer = id => {
//   return fetch(`${baseURL}${id}`)
//     .then(response => response.json())
//     .then(data => data)
//     .then(err => err)
// }

// using async await
// const getBeer = async id => {
//   try {
//     const response = await fetch(`${baseURL}${id}`)
//     const data = await response.json()
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }

// getBeer(5).then(data => {
//   const [beer] = data
//   const { name, description } = beer

//   const beerDescription = `${name} is ${description}.`

//   console.log(beerDescription)
// })
