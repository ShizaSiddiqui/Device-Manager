import styled from "styled-components/native";
import Constants from "expo-constants";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${conventionalSizes.Bigger}px;

	background-color: ${props => props.theme.Colors.statusBar};
`;

export const Empty = styled.View`
	width: ${conventionalSizes.Biggest}px;
	height: ${conventionalSizes.Biggest}px;
`;

export const StatusBarContainer = styled.View`
	height: ${Constants.statusBarHeight}px;
	background-color: ${props => props.theme.Colors.statusBar};
`;

export const Title = styled.Text`
	font-size: ${conventionalSizes.Bigger}px;
	font-weight: bold;
	color: ${props => props.theme.Colors.primaryText};
`;
