import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import FilledButton from "../index";
import { Dark } from "../../../utils/res/themes/darkTheme";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: () => mockedNavigate(),
	}),
}));

const mockerOnPress = jest.fn();

describe("Test FilledButton Component", () => {
	it("Should call prop onPress function", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<FilledButton text="Dummy title" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("buttonContainer");
		fireEvent.press(element);

		expect(mockerOnPress).toBeCalled();
	});

	it("Should render button title correctly", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<FilledButton text="Dummy title" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("buttonTitle");
		expect(element.props.children).toBe("Dummy title");
	});
});
