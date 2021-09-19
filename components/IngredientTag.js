import { Button, Box, Tag, Img } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
// import closeButton from '../icon.png'

const IngredientTag = ({ ingredient, removeIngredient }) => {
  return (
    <span>
      <Tag mr={1} colorScheme='orange' size='lg'>
        <Box>{ingredient.name}</Box>

        <CloseIcon
          ml={2.5}
          mt={0.5}
          color='orange'
          onClick={() => removeIngredient(ingredient.id)}
        />
      </Tag>
    </span>
  )
}

export default IngredientTag
