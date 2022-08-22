import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Link from "../index";
import { Dark } from "../../../utils/res/themes/darkTheme";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: () => mockedNavigate(),
	}),
}));

const mockerOnPress = jest.fn();

describe("Test Link Component", () => {
	
it("Should call prop onPress function", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Link label="Dummy label" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("showMoreContainer");
		fireEvent.press(element);

		expect(mockerOnPress).toBeCalled();
	});

  it("Should render Span with prop label", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Link label="Dummy label" onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("btnLabel");
		expect(element.props.children).toBe("Dummy label");
	});

});
