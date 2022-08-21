import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.View`
	flex: 1;
	padding: ${conventionalSizes.Bigger}px;
	background-color: ${props => props.theme.Colors.background};
`;

export const NoItemFound = styled.View`
	align-items: center;
	justify-content: center;
	align-self: center;
	flex: 1;
`;

export const ActionsContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const BtnContainer = styled.View`
	flex: 1;
	margin-left: ${conventionalSizes.XXSmallest}px;
	margin-right: ${conventionalSizes.XXSmallest}px;
`;
