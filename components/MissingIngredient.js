import { Text } from '@chakra-ui/react'

const MissingIngredient = ({ ingredient }) => (
  <Text>&bull; {ingredient.original.toLowerCase()}</Text>
)

export default MissingIngredient
