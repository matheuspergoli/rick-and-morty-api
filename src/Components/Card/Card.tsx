import React from 'react'
import style from './Card.module.scss'

interface Character {
	character: {
		id: number
		name: string
		image: string
		status: string
		species: string
		origin: { name: string }
		location: { name: string }
	}
}

function Card({ character }: Character) {
	return (
		<>
			<section className={style.main}>
				<figure className={style.container_image}>
					<img src={character.image} alt={character.name} />
				</figure>
				<article className={style.character_info_wrapper}>
					<div className={style.character_info_1}>
						<h1>{character.name}</h1>
						<p style={{ display: 'flex', alignItems: 'center' }}>
							<span
								className={`circle ${
									character.status === 'Alive' ? 'alive' : 'dead'
								}`}
							></span>
							{character.status} - {character.species}
						</p>
					</div>
					<div className={style.character_info_2}>
						<p>Last known location:</p>
						<p>{character.location.name}</p>
					</div>
					<div className={style.character_info_3}>
						<p>First seen in:</p>
						<p>{character.origin.name}</p>
					</div>
				</article>
			</section>
		</>
	)
}

export default Card
