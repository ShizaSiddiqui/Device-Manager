import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Header from "../index";
import { Dark } from "../../../utils/uikit/themes/darkTheme";

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: () => mockedNavigate(),
	}),
}));

const mockedUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
	useDispatch: () => mockedUseDispatch,
}));

describe("Test Header Component", () => {
	it("Should render chevron", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header goBack title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("goBackBtn");

		expect(element).not.toBeNull();
	});

	it("Should call GoBack on chevron click", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header goBack title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("goBackBtn");
		fireEvent.press(element);

		expect(mockedNavigate).toBeCalled();
	});

	it("Should call switch theme dispatcher on icon click", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header settings title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("toggleBtn");
		fireEvent.press(element);

		expect(mockedUseDispatch).toBeCalled();
	});

	it("Should render Title with prop content", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header goBack title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("headerTitle");
		expect(element.props.children).toBe("Dummy Title");
	});
});
