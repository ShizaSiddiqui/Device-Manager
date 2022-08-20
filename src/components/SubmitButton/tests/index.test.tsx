import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import SubmitButton from "../index";
import { Dark } from "../../../utils/uikit/themes/darkTheme";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: () => mockedNavigate(),
	}),
}));

const mockerOnPress = jest.fn();

describe("Test SubmitButton Component", () => {
	it("Should call prop onPress function", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<SubmitButton text="Dummy title" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("buttonContainer");
		fireEvent.press(element);

		expect(mockerOnPress).toBeCalled();
	});

	it("Should render button title correctly", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<SubmitButton text="Dummy title" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("buttonTitle");
		expect(element.props.children).toBe("Dummy title");
	});
});
