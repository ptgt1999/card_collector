import pokemon from "pokemontcgsdk"

async function cards(value) {
  pokemon.configure({apiKey: '123abcdda70f59-a08e-47f5-b0d9-5c047ec75e7b'});
  console.log("Hello")

    let result = await pokemon.card.where({pageSize: 250, page: 1, q:`name:${value}*`})
    return result
}

export default cards;