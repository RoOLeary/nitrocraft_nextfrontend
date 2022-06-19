import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Topic() {
   
    return(
        <Layout>
            <section className="c-section">
                <div className="o-wrapper">
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
                </div>    
            </section>
        </Layout>
    )
}

