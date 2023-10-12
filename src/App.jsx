import ToDoProvider from 'contexts/ToDoProvider'
import MainList from 'components/MainList'
import Loading from 'components/Loading'
import Pinned from 'components/Pinned'
import Header from 'components/Header'
import Form from 'components/Form'
import { useState } from 'react'

const App = () => {
	const [loading, setLoading] = useState(true)
	const random = Math.round(Math.random() * 3000)

	setTimeout(() => {
		setLoading(false)
	}, random)

	return loading ? (
		<Loading />
	) : (
		<ToDoProvider>
			<Header />
			<Form />
			<MainList />
			<Pinned />
		</ToDoProvider>
	)
}

export default App
