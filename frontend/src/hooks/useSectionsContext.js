import { SectionContext } from "../context/SectionContext";
import { useContext } from "react";


export const useSectionsContext = () => {
	const context = useContext(SectionContext)

	if (!context) {
		throw Error('useSectionsContext must be used inside an SectionsContextProvider')
	}

	return context
}