export type coffee = {
		id: number;
		name: string;
		description: string;
		price: number;
		category: string;
		image: string;
		popular: boolean;
}

export const coffeeMenu: coffee[] = [
	{
		id: 1,
		name: 'Espresso',
		description: 'Classic strong coffee made from premium arabica beans',
		price: 120,
		category: 'hot',
		image: '/coffees/espresso.png',
		popular: true,
	},
	{
		id: 2,
		name: 'Cappuccino',
		description: 'Perfect blend of espresso with airy milk foam',
		price: 180,
		category: 'hot',
		image: '/coffees/сappuccino.png',
		popular: true,
	},
	{
		id: 3,
		name: 'Latte',
		description: 'Smooth coffee with steamed milk and light foam',
		price: 200,
		category: 'hot',
		image: '/coffees/latte.png',
		popular: false,
	},
	{
		id: 4,
		name: 'Americano',
		description: 'Espresso diluted with hot water for a milder taste',
		price: 150,
		category: 'hot',
		image: '/coffees/americano.png',
		popular: true,
	},
	{
		id: 5,
		name: 'Iced Latte',
		description: 'Refreshing cold latte served over ice cubes',
		price: 220,
		category: 'cold',
		image: '/coffees/iced-latte.png',
		popular: true,
	},
	{
		id: 6,
		name: 'Frappuccino',
		description: 'Blended iced coffee with cream and ice',
		price: 250,
		category: 'cold',
		image: '/coffees/frappuccino.png',
		popular: false,
	},
	{
		id: 7,
		name: 'Flat White',
		description: 'Double espresso with microfoam steamed milk',
		price: 190,
		category: 'hot',
		image: '/coffees/flat-white.png',
		popular: false,
	},
	{
		id: 8,
		name: 'Cold Brew',
		description: 'Slow-steeped coffee with rich and smooth flavor',
		price: 240,
		category: 'cold',
		image: '/coffees/cold-brew.png',
		popular: true,
	},
	{
		id: 9,
		name: 'Mocha',
		description: 'Coffee with hot chocolate and whipped cream',
		price: 230,
		category: 'hot',
		image: '/coffees/mocha.png',
		popular: false,
	},
	{
		id: 10,
		name: 'Raf Coffee',
		description: 'Creamy coffee with vanilla sugar and cream',
		price: 210,
		category: 'hot',
		image: '/coffees/raf.png',
		popular: true,
	},
];
