import styled, { css } from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

interface ContainerProps {
	isFocused: boolean;
	error?: string;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	align-items: center;

	width: 100%;
	min-height: 62px;

	padding-left: ${CommonSizes.Small}px;
	padding-right: ${CommonSizes.Small}px;
	margin-top: ${CommonSizes.XSmallest}px;
	margin-bottom: ${CommonSizes.Small}px;

	background-color: ${props => props.theme.Colors.input};
	border-radius: ${CommonSizes.Smallest}px;
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
	font-size: ${CommonSizes.Medium}px;
`;

export const TextInput = styled.TextInput`
	flex: 1;
	height: 80%;
	margin-left: ${CommonSizes.Small}px;
	color: ${props => props.theme.Colors.primaryText};
`;
