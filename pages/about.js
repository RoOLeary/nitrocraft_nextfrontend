import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Inner.module.css';
import Header from './../components/Header';
import Slider from './../components/Slider';



export default function About() {
    
    // const router = useRouter()
    return (
        <div className={styles.container}>
            <Header headline="About"/>
            <main className="o-wrapper">
                <div className='article-container' style={{ "padding": "4em 0" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus in ante semper dictum. In eu sapien blandit, tincidunt nibh nec, pharetra nisi. Suspendisse ac ante rhoncus, tristique nibh ac, faucibus quam. Etiam eget cursus elit, quis iaculis nunc. Vestibulum ultricies tristique orci, sit amet ultrices neque pretium rhoncus. Maecenas dictum sem elit, id cursus lectus auctor eget. Nulla et elit eu tortor finibus fringilla. Phasellus id ipsum viverra, pharetra velit nec, ullamcorper risus. Donec consequat faucibus enim eget vulputate. Suspendisse ut magna efficitur, egestas risus a, facilisis dolor. Sed quis luctus elit. Maecenas ultricies rhoncus augue, vel interdum ligula rhoncus et. Etiam fermentum, ante at viverra hendrerit, ipsum mi volutpat justo, a elementum felis justo non felis.
                    Nullam ut metus sed erat tincidunt faucibus sit amet tincidunt dui. Aenean faucibus quam dui, a interdum mauris pulvinar sit amet. Nulla facilisi. Donec non malesuada erat, vehicula placerat diam. Etiam hendrerit vestibulum posuere. Praesent vitae mattis est. Donec rhoncus risus eu arcu aliquet, eu sollicitudin augue tincidunt. Morbi placerat dignissim augue, ac semper nunc congue id. Nulla massa lorem, mattis eget ultrices vitae, condimentum non augue. Duis varius rutrum ullamcorper. In pulvinar odio vel ex sollicitudin pulvinar.
                    Sed sit amet augue gravida, viverra mi vel, maximus libero. Praesent sagittis rutrum libero, sed varius nisi sagittis et. Fusce ac varius neque. Quisque aliquet, felis nec rhoncus aliquet, mi justo faucibus nunc, sed feugiat ipsum magna vitae nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur felis. Integer sed sem in massa ultricies convallis hendrerit id leo.    
                </div>
                <Link href={`/`}><a>Home</a></Link><Link href={`/tech`}><a>Tech</a></Link>
            </main>  
            <Slider />  
        </div>
    )
}
