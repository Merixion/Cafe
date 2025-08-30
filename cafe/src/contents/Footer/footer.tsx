import styles from './footer.module.css'

export default function Footer(){
  return (
		<footer id='contact' className={styles.footer}>
			<h1>Contact Us: </h1>
			<ul>
				<li>maxim.bykoianko@gmail.com</li>
        <li>+972 53 986-81-68</li>

			</ul>
		</footer>
	);
}