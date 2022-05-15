import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css';
import Header from '../../components/Header';
import Link from 'next/link';

export default function Topic() {
   
    return(
        <div className={styles.container}>
            <main className="o-wrapper">
                <h1>TOPICS INDEX</h1>
                <p>Probably just a list</p>
                <ul>
                    
                <li>
                    <Link href={`/topics/tech`}>
                        <a>TOPIC</a>
                    </Link>
                    
                </li>
            
                </ul>
                <Link href={`/`}><a>Home</a></Link>
            </main>    
        </div>
    )
}

