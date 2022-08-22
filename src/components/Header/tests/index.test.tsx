import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import Header from "../index";
import { Dark } from "../../../utils/res/themes/darkTheme";


const mockedUseDispatch = jest.fn();
jest.mock("react-redux", () => ({
	useDispatch: () => mockedUseDispatch,
}));

const mockedNavigate = jest.fn();
jest.mock("@react-navigation/native", () => ({
	useNavigation: () => ({
		goBack: () => mockedNavigate(),
	}),
}));



describe("Test Header Component", () => {
	it("Should render Title with prop content", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header goBack title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("headerTitle");
		expect(element.props.children).toBe("Dummy Title");
	});

	it("Should render chevron", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<Header goBack title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("goBackBtn");

		expect(element).not.toBeNull();
	});

	it("Should call goBack on chevron click", () => {
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
				<Header darkMode title="Dummy Title" />
			</ThemeProvider>
		);
		const element = queryByTestId("toggleBtn");
		fireEvent.press(element);

		expect(mockedUseDispatch).toBeCalled();
	});


});
