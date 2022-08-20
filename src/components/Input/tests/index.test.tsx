import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Input from "../index";
import { Dark } from "../../../utils/uikit/themes/darkTheme";

const mockedChangeText = jest.fn();

describe("Test Input component", () => {
	it("Should add border if input is focused", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Input iconName="smartphone" />
			</ThemeProvider>
		);
		const textFielElement = queryByTestId("textField");
		const containerElement = queryByTestId("inputContainer");
		fireEvent(textFielElement, "focus");
		expect(containerElement.props.style[0].borderColor).toBe(
			Dark.Colors.border
		);
	});

	it("Should add border if input has error", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Input iconName="smartphone" error="Dummy error" />
			</ThemeProvider>
		);
		const containerElement = queryByTestId("inputContainer");
		expect(containerElement.props.style[0].borderColor).toBe(Dark.Colors.error);
	});

	it("Should render a Label if has label prop", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Input iconName="smartphone" label="Dummy Label" />
			</ThemeProvider>
		);

		const element = queryByTestId("inputLabel");
		expect(element).not.toBeNull();
	});

	it("Should call onChangeText if text change", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Input iconName="smartphone" onChangeText={mockedChangeText} />
			</ThemeProvider>
		);
		const textFielElement = queryByTestId("textField");
		fireEvent.changeText(textFielElement, "Dummy text");
		expect(mockedChangeText).toBeCalled();
	});
});
