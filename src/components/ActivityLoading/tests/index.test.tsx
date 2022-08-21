import { ThemeProvider } from "styled-components/native";
import { render } from "@testing-library/react-native";
import LoadingOverlayer from "../index";
import { Dark } from "../../../utils/res/themes/darkTheme";

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
	it("Should NOT render if prop visible is false", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<LoadingOverlayer loading={false} />
			</ThemeProvider>
		);
		const element = queryByTestId("activityLoader");

		expect(element).toBeNull();
	});

	it("Should render correctly if prop visible is true", () => {
		const { queryByTestId } = render(
			<ThemeProvider theme={Dark}>
				<LoadingOverlayer loading />
			</ThemeProvider>
		);
		const element = queryByTestId("activityLoader");

		expect(element).not.toBeNull();
	});
});
