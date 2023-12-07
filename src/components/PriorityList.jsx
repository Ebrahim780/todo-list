import { useStateContext } from 'contexts/ToDoProvider'
import { motion, AnimatePresence } from 'framer-motion'
import translate from 'translate/list'
import Todo from './Todo'

const PriorityList = ({ priority }) => {
  const { todos, lang } = useStateContext()

  const colors = {
    low: 'green',
    medium: 'orange',
    high: 'red',
  }

  const filteredTodos = todos.filter(todo => todo.priority === priority)

  return (
    filteredTodos.length !== 0 && (
      <div className='col s12 m6 l4'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, type: 'keyframes', bounce: 0.1 }}
            className={`card-panel ${colors[priority]}`}>
            <h5 className='list__header'>{translate[lang][priority]}</h5>
            {filteredTodos.map(todo => (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, type: 'tween', bounce: 0.1 }}
                  className='list__item'
                  key={todo.id}>
                  <Todo todo={todo} />
                </motion.div>
              </AnimatePresence>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    )
  )
}

export default PriorityList
