declare module '@splidejs/react-splide' {
	import { ComponentProps } from 'react';
	import { Splide as SplideCore, Options } from '@splidejs/splide';
	
	export interface SplideProps extends ComponentProps<'div'> {
		options?: Options;
	}
	
	export const Splide: React.ComponentType<SplideProps>;
	export const SplideSlide: React.ComponentType;
}