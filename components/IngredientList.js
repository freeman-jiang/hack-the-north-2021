import IngredientTag from './IngredientTag'

const IngredientList = ({ ingredients, removeIngredient }) => {
  return (
    <div>
      {ingredients.map(ingredient => (
        <IngredientTag
          key={ingredient.id}
          ingredient={ingredient}
          removeIngredient={removeIngredient}
        />
      ))}
    </div>
  )
}

export default IngredientList
