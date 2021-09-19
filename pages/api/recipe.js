//An asynchronous function to fetch data from the API.
import axios from 'axios'

export default async function sendApiRequest(req, res) {
  const API_KEY = process.env.API_KEY

  try {
    const queries = req.body
    let stringifiedQuery = ''
    queries.forEach(query => (stringifiedQuery += `${query},`))
    stringifiedQuery = stringifiedQuery.substring(
      0,
      stringifiedQuery.length - 1
    )

    console.log(stringifiedQuery)
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${stringifiedQuery}&number=6`
    )
    console.log(data)
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
}
