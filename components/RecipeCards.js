import { Image } from '@chakra-ui/image'
import { Badge, Box, SimpleGrid, Text } from '@chakra-ui/layout'
import RecipeCard from './RecipeCard'

const RecipeCards = ({ recipes }) => {
  return (
    <SimpleGrid columns={3} spacing={5}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      )) || <Text>No recipes can be made with your ingredients :(</Text>}
    </SimpleGrid>
  )
}

export default RecipeCards
