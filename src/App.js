import React, { useState } from 'react'
import Header from 'components/Header'
import Form from 'components/Form'
import List from 'components/List'
import Loading from 'components/Loading'
import ToDoProvider from 'contexts/ToDoProvider'
import Pinned from 'components/Pinned'

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
			<List />
			<Pinned />
		</ToDoProvider>
	)
}

export default App
