import styled, { css } from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

interface ContainerProps {
	isFocused: boolean;
	error?: string;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	align-items: center;

	width: 100%;
	min-height: 62px;

	padding-left: ${conventionalSizes.Small}px;
	padding-right: ${conventionalSizes.Small}px;
	margin-top: ${conventionalSizes.XSmallest}px;
	margin-bottom: ${conventionalSizes.Small}px;

	background-color: ${props => props.theme.Colors.input};
	border-radius: ${conventionalSizes.Smallest}px;
	${containerProps =>
		containerProps.isFocused &&
		css`
			border-width: 2px;
			border-color: ${props => props.theme.Colors.border};
		`}
	${containerProps =>
		containerProps.error &&
		css`
			border-width: 2px;
			border-color: ${props => props.theme.Colors.error};
		`}
`;

export const Label = styled.Text`
	color: ${props => props.theme.Colors.primaryText};
	font-size: ${conventionalSizes.Medium}px;
`;

export const TextInput = styled.TextInput`
	flex: 1;
	height: 80%;
	margin-left: ${conventionalSizes.Small}px;
	color: ${props => props.theme.Colors.primaryText};
`;
