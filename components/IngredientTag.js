import { Button } from '@chakra-ui/react'

const IngredientTag = ({ ingredient, removeIngredient }) => {
  return (
    <Button
      mr={1}
      colorScheme='orange'
      size='sm'
      onClick={() => removeIngredient(ingredient.id)}
    >
      {ingredient.name}{' '}
    </Button>
  )
}

export default IngredientTag
