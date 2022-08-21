import styled from "styled-components/native";
import { conventionalSizes } from "../../utils/res/size";

export const Container = styled.ScrollView`
	flex: 1;

	padding: ${conventionalSizes.Medium}px;
	background-color: ${props => props.theme.Colors.background};
`;

export const QrCodeContainer = styled.View`
	align-self: center;
	margin-top: ${conventionalSizes.Medium}px;
	margin-bottom: ${conventionalSizes.Medium}px;
`;
