import React from 'react'
import Card from './Components/Card/Card'
import Characters from './Components/Characters/Characters'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Characters />
		</QueryClientProvider>
	)
}

export default App
