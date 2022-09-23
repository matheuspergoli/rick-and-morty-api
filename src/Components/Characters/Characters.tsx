import React from 'react'
import Card from '../Card/Card'
import style from './Characters.module.scss'
import { useQuery } from 'react-query'

interface Character {
	id: number
	name: string
	image: string
	status: string
	species: string
	origin: { name: string }
	location: { name: string }
}

function Characters() {
	const [page, setPage] = React.useState(1)

	async function fetchCharacter({ queryKey }: any) {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		)
		const json = await response.json()
		return json
	}

	const { data, status } = useQuery(['characters', page], fetchCharacter)

	if (status === 'loading') return <h1>Loading...</h1>
	if (status === 'error') return <h1>Error</h1>
	return (
		<>
			<h1 className={style.title}>The Rick and Morty API</h1>
			<main className={style.main}>
				{data &&
					data.results.map((character: Character) => (
						<Card key={character.id} character={character} />
					))}
			</main>
			<div className={style.buttons}>
				<button disabled={page === 1} onClick={() => setPage(page - 1)}>
					Previous
				</button>
				<button disabled={page === 42} onClick={() => setPage(page + 1)}>
					Next
				</button>
			</div>
		</>
	)
}

export default Characters
