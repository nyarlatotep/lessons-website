import { createContext } from 'react';

export const Themes = {
	dark: {
		bodyTheme: {
			backgroundColor: "rgb(5 10 14)",
			color: "#eee"
		},
		content: {
			backgroundColor: "rgb(80 80 80 / 95%)",
			color: "rgb(220 220 220)"
		}
	},
	light: {
		bodyTheme: {
			backgroundColor: "rgb(225 230 254)",
			color: "#111"
		},
		content: {
			backgroundColor: "rgba(180 180 180 / 95%)",
			color: "rgb(5 5 5)"
		}
	}
};
export const ThemeContext = createContext( Themes.dark );

