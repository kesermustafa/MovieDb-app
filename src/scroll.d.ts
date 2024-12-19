declare module 'react-scroll' {
	export const animateScroll: {
		scrollToTop: (options?: {
			duration?: number;
			smooth?: boolean | string;
		}) => void;
	};
}