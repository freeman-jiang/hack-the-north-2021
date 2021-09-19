import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Heading, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import MissingIngredient from './MissingIngredient'

export default function ModalButton({ recipe }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button mt={2} onClick={onOpen}>
        See More
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr={8}>{recipe.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <Heading as='h3' size='sm'>
              Missing Ingredients
            </Heading>

            {recipe.missedIngredients.map(missingIngredient => (
              <MissingIngredient
                key={missingIngredient.id}
                ingredient={missingIngredient}
              />
            ))}

            <Heading mt={2} as='h3' size='sm'>
              Unused Ingredients
            </Heading>

            {recipe.unusedIngredients.length !== 0
              ? recipe.unusedIngredients.map(unusedIngredient => (
                  <MissingIngredient
                    key={unusedIngredient.id}
                    ingredient={unusedIngredient}
                  />
                ))
              : 'All ingredients used!'}
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}
