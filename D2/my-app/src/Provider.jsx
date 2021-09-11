import { createContext } from "react";
export const Context = createContext();

function Provider({ children, value }) {
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default Provider;
