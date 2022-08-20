import styled from "styled-components/native";
import { Colors } from "../../utils/uikit/colors";

export const Container = styled.View`
	position: absolute;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	background-color: ${Colors.black};
	opacity: 0.8;
`;
