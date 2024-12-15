declare module '@splidejs/react-splide' {
	import React from 'react';
	
	export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
		options?: any;
		children?: React.ReactNode;
		[key: string]: any;
	}
	
	export interface SplideSlideProps extends React.HTMLAttributes<HTMLDivElement> {
		children?: React.ReactNode;
		key?: number | string;
		[key: string]: any;
	}
	
	export const Splide: React.ComponentType<SplideProps>;
	export const SplideSlide: React.ComponentType<SplideSlideProps>;
}