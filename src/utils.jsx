import { Link } from "react-router-dom";

const MIN_WIDTH_FOR_WIDE_SCREEN = 600;

export function getCurrentDimension() {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
}

export function isWideWidthScreen(screenDimensions) {
	return screenDimensions.width > MIN_WIDTH_FOR_WIDE_SCREEN;
}
