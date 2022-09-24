
<GridLoader color="#36d7b7" />

import styles from '../styles/Loader.module.css';
import {GridLoader} from 'react-spinners'

const PagingLoader = () => {
    return (
        
        <GridLoader
            color="#fff"
            speedMultiplier={2}
            size={60}
            // size={40}
            />

     );
}

export default PagingLoader;