import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import AddButton from "..";
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
				<AddButton onPress={mockerOnPress} />
			</ThemeProvider>
		);
		const element = queryByTestId("addBtnContainer");
		fireEvent.press(element);

		expect(mockerOnPress).toBeCalled();
	});
});
