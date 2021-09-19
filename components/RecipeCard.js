import { Image } from '@chakra-ui/image'
import { Badge, Box, SimpleGrid, Text, Button, Center } from '@chakra-ui/layout'
import ModalButton from './IngredientModal'

const RecipeCard = ({ recipe }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Center>
        <Image src={recipe.image} alt={recipe.title} />
      </Center>

      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            <Text>
              &bull; {recipe.missedIngredients.length} missing ingredients
            </Text>
            <Text>
              &bull; {recipe.unusedIngredients.length} unused ingredients
            </Text>
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {recipe.title}
        </Box>

        <Box d='flex' mt='2' alignItems='center'>
          <Text>
            Rating:{' '}
            {recipe.likes === 1
              ? `${recipe.likes} Like`
              : `${recipe.likes} Likes`}{' '}
          </Text>
        </Box>
        <ModalButton recipe={recipe} />
      </Box>
    </Box>
  )
}

export default RecipeCard
