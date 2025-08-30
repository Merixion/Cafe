import styles from './header.module.css'

export default function Header(){
  return (
		<header className={styles.header}>
			<a href='#about'>About</a>
			<a href='#menu'>Menu</a>
			<a href='#contact'>Communication</a>
		</header>
	);
}