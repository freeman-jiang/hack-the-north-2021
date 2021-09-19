import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Text,
  Button,
  Alert,
  Input,
  Heading,
  Box,
  Stack,
  Divider,
} from '@chakra-ui/react'
import { AlertDescription, AlertTitle, AlertIcon } from '@chakra-ui/alert'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import findRecipes from '../utils/findRecipes'
import IngredientList from '../components/IngredientList'
import RecipeCards from '../components/RecipeCards'

export default function Home() {
  const [ingredients, setIngredients] = useState([])
  const [input, setInput] = useState('')
  const [recipes, setRecipes] = useState([])
  const [recipeExists, setRecipeExists] = useState(true)

  const handleChange = e => setInput(e.target.value)
  const addIngredient = e => {
    if (!input || !isASCII(input)) {
      alert("Don't try to game the system.")
      return
    }
    const newIngredient = {
      name: input,
      id: nanoid(),
    }
    setIngredients(ingredients.concat(newIngredient))
    setInput('')
  }
  const removeIngredient = id => {
    const newIngredients = ingredients.filter(
      ingredient => ingredient.id !== id
    )
    setIngredients(newIngredients)
  }

  const handleKeyPress = e => {
    e.charCode == 13 ? addIngredient() : 1
  }

  const displayRecipes = async ingredients => {
    const res = await findRecipes(ingredients)
    console.log('got it here', res)
    if (res.length === 0) {
      setRecipeExists(false)
      return
    }
    setRecipeExists(true)
    setRecipes(res)
  }

  const inputStyles = {
    width: '80vh',
    'border-color': 'grey',
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Nom</title>
        <meta name='description' content='Nom' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.dashboard}>
        <Heading
          mt={2}
          bgGradient='linear(to-br, #FFA500, #fc3503)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          Build Your Recipe:
        </Heading>
        {/* <div> */}
        <Input
          style={inputStyles}
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          mt={4}
          size='lg'
          placeholder="What's in your fridge today?"
        />
        {/* </div> */}
        <Divider orientation='horizontal' />
        <Stack mt={3} direction={['column', 'row']} spacing='24px'>
          <Button onClick={addIngredient} size='md'>
            Add Ingredient
          </Button>
          <Button
            colorScheme='red'
            size='md'
            onClick={() => displayRecipes(ingredients)}
          >
            Find Recipes
          </Button>
        </Stack>
        <Box mt={4} mb={4}>
          <IngredientList
            ingredients={ingredients}
            removeIngredient={removeIngredient}
          />
        </Box>
        <Box mb={10} mt={5}>
          <RecipeCards recipes={recipes} />
          {recipeExists || (
            <Box mt={4}>
              <Alert status='error'>
                <AlertIcon />
                <AlertTitle mr={2}>
                  No recipes match your ingredients!
                </AlertTitle>
                <AlertDescription>
                  Try again with more ingredients.
                </AlertDescription>
              </Alert>
            </Box>
          )}
        </Box>
      </main>
    </div>
  )
}

function isASCII(str) {
  return /^[\x00-\x7F]*$/.test(str)
}
