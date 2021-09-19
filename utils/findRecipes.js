import axios from 'axios'
const baseUrl = '/api/recipe'

const findRecipes = async ingredients => {
  const cleanedUpIngredients = ingredients.map(ingredient => ingredient.name)
  const { data } = await axios.post(baseUrl, cleanedUpIngredients)
  //console.log(data)
  return data
}

export default findRecipes
