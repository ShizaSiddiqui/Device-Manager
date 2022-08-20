import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		Colors: {
			name: string;
			background: string;
			icon: string;
			primaryText: string;
			secondaryText: string;
			buttonBackground: string;
			buttonText: string;
			cardBackground: string;
			input: string;
			border: string;
			statusBar: string;
			link: string;
			error: string;
		};
	}
}
