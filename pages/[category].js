import styles from '../styles/Inner.module.css';
import Header from './../components/Header';
import Hero from '../components/Hero';
import Text from '../components/Text'
import TextVisual from '../components/TextVisual';
import Faq from '../components/Faq';
import Related from '../components/Related';
import Link from 'next/link';

export default function Category({ entry }) {

    const textVisualContent = {
        title: 'Smoke Potent Weed',
        content: 'Casually arise and get Molly ready for her stroll. Here goes...',
        image: '/assets/img/conf.jpg',
        link: '#',
        linkText: 'Learn More'
      }

    return(
        <div className={styles.container}>
            <Header headline="Tech"/>
            
            <Related />
            <Faq />
            <main className="o-wrapper">
                <div className='article-container' style={{ "padding": "4em 0" }}>
                    Maecenas dictum sem elit, id cursus lectus auctor eget. Nulla et elit eu tortor finibus fringilla. Phasellus id ipsum viverra, pharetra velit nec, ullamcorper risus. Donec consequat faucibus enim eget vulputate. Suspendisse ut magna efficitur, egestas risus a, facilisis dolor. Sed quis luctus elit. Maecenas ultricies rhoncus augue, vel interdum ligula rhoncus et. Etiam fermentum, ante at viverra hendrerit, ipsum mi volutpat justo, a elementum felis justo non felis. Nullam ut metus sed erat tincidunt faucibus sit amet tincidunt dui. Aenean faucibus quam dui, a interdum mauris pulvinar sit amet. Nulla facilisi. Donec non malesuada erat, vehicula placerat diam. Etiam hendrerit vestibulum posuere. Praesent vitae mattis est. Donec rhoncus risus eu arcu aliquet, eu sollicitudin augue tincidunt. Morbi placerat dignissim augue, ac semper nunc congue id. Nulla massa lorem, mattis eget ultrices vitae, condimentum non augue. Duis varius rutrum ullamcorper. In pulvinar odio vel ex sollicitudin pulvinar. Sed sit amet augue gravida, viverra mi vel, maximus libero. Praesent sagittis rutrum libero, sed varius nisi sagittis et. Fusce ac varius neque. Quisque aliquet, felis nec rhoncus aliquet, mi justo faucibus nunc, sed feugiat ipsum magna vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur felis. Integer sed sem in massa ultricies convallis hendrerit id leo.
                    <br /><br />
                    </div>
                <Link href={`/`}><a>Home</a></Link>
            </main>    
        </div>
    )
}