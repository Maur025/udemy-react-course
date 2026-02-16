import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get.gifs-by-query.action";

export const useGifs = () => {
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);

	const [gifs, setGifs] = useState<Gif[]>([]);

	const handleTermClicked = async (term: string) => {
		const gifs = await getGifsByQuery(term);
		setGifs(gifs);
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

	return { previousTerms, gifs, handleTermClicked, handleSearch };
};
