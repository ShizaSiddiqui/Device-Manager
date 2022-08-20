import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.View`
	flex: 1;
	padding: ${CommonSizes.Bigger}px;
	background-color: ${props => props.theme.Colors.background};
`;

export const ActionsContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const BtnContainer = styled.View`
	flex: 1;
	margin-left: ${CommonSizes.XXSmallest}px;
	margin-right: ${CommonSizes.XXSmallest}px;
`;
