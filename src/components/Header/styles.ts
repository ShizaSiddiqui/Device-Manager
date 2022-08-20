import styled from "styled-components/native";
import Constants from "expo-constants";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${CommonSizes.Bigger}px;

	background-color: ${props => props.theme.Colors.statusBar};
`;

export const Empty = styled.View`
	width: ${CommonSizes.Biggest}px;
	height: ${CommonSizes.Biggest}px;
`;

export const StatusBarContainer = styled.View`
	height: ${Constants.statusBarHeight}px;
	background-color: ${props => props.theme.Colors.statusBar};
`;

export const Title = styled.Text`
	font-size: ${CommonSizes.Bigger}px;
	font-weight: bold;
	color: ${props => props.theme.Colors.primaryText};
`;
