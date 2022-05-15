import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './../../styles/Inner.module.css'
import Header from '../../components/Header'

export default function Tag({ entry }) {
    const router = useRouter()
    const slug = router.query
    console.log(entry);
    
    return (
        
        <div className={styles.container}>
            <Header headline={slug.tag} />
            <main className="o-wrapper">
                <h1>Tag: {slug.tag}</h1>
                <p>Description of the tag</p>
            </main>
        </div>
    
    )
  }
  
