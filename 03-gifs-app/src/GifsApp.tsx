import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get.gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);

	const [gifs, setGifs] = useState<Gif[]>([]);

	const handleTermClicked = (term: string) => {
		console.log({ term });
	};

	const handleSearch = async (query: string = "") => {
		// if (query === null || query === undefined || query === "") {
		// 	return;
		// }

		// const cleanQuery = query.trim().toLowerCase();

		// const exists = previousTerms.some((term) => term === cleanQuery);

		// if (exists) {
		// 	return;
		// }

		// const adjustPreviousTerms =
		// 	previousTerms.length === 8 ? previousTerms.slice(0, -1) : previousTerms;

		// console.log(adjustPreviousTerms);

		// const newPreviousTerms = [cleanQuery, ...adjustPreviousTerms];

		// setPreviousTerms(newPreviousTerms);
		query = query.trim().toLocaleLowerCase();

		if (query.length === 0) return;

		if (previousTerms.includes(query)) return;

		setPreviousTerms([query, ...previousTerms].slice(0, 8));

		const gifsResponse = await getGifsByQuery(query);
		setGifs(gifsResponse);
	};

	return (
		<>
			{/* Header */}
			<CustomHeader
				title="Buscador de Gifs"
				description="Descubre y comparte el Gif perfecto"
			/>

			{/* Search */}
			<SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

			{/* Búsquedas previas */}
			<PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

			{/* Gifs */}
			<GifList gifs={gifs} />
		</>
	);
};
