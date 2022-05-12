import { useRouter } from 'next/router'
import styles from './../../styles/Inner.module.css'
import Header from './../../components/Header';


export default function Articles() {
    
    // const router = useRouter()
    return (
        <div className={'cntainer'}>
            <Header headline="Articles"/>
            <main className="o-wrapper">
                <p>Placeholder index</p>
            </main>  
        </div>
    )
}
