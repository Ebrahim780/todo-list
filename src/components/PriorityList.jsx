import { useStateContext } from 'contexts/ToDoProvider'
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
        <div className={`card-panel ${colors[priority]}`}>
          <h5 className='list__header'>{translate[lang][priority]}</h5>

          {filteredTodos.map(todo => (
            <div className='list__item' key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default PriorityList
