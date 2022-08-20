import styled from "styled-components/native";
import { CommonSizes } from "../../utils/uikit/sizes";

export const Container = styled.ScrollView`
	flex: 1;

	padding: ${CommonSizes.Medium}px;
	background-color: ${props => props.theme.Colors.background};
`;

export const QrCodeContainer = styled.View`
	align-self: center;
	margin-top: ${CommonSizes.Medium}px;
	margin-bottom: ${CommonSizes.Medium}px;
`;
