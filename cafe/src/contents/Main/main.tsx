import styles from './main.module.css'
import type { coffee } from '../../data/menu'


export default function Main({coffees}: {coffees: coffee[]}){
  return (
		<main>
			<h1>We CoffeGo</h1>
			<section id='about' className={styles.about}>
				<article className='text'>
					<p>
						We are CoffeeGO, a modern coffee chain dedicated to bringing premium
						quality coffee to busy people on the move. Since our founding in
						2018, we have specialized in expertly crafted espresso drinks,
						artisanal pastries, and quick healthy snacks that fuel your day. Our
						passionate baristas are committed to creating the perfect cup every
						time, using only freshly roasted beans from sustainable farms around
						the world.
					</p>
					<br></br>
					<p>
						With over 50 locations across the city, we combine the convenience
						of grab-and-go service with the quality you'd expect from a
						specialty coffee shop. Whether you're rushing to work, meeting
						friends, or taking a well-deserved break, we're here to make every
						moment a little brighter with exceptional coffee and warm
						hospitality.
					</p>
				</article>
				<img src='/logo.png' alt='LOGO'></img>
			</section>
			<h1>Menu</h1>
			<section id='menu' className={styles.menu}>
				{coffees.map(coffee => (
					<article key={coffee.id} className={styles.coffee}>
						<img src={coffee.image}></img>
						<p>{coffee.name}</p>
						<p>{coffee.description}</p>
						<h2>{coffee.price / 100} $</h2>
						<button
							onClick={() => {
								alert(`You are bought ${coffee.name.toLowerCase()}`);
							}}
							className={styles.buyBtn}
						>
							Buy
						</button>
					</article>
				))}
			</section>
		</main>
	);
}