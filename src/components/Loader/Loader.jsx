import { Audio } from 'react-loader-spinner'
import css from "./Loader.module.css"

export default function Loader({ loading }) {
    
    return (
        <div className={css.loader}>
            {loading && <Audio 
            height="60"
            width="46" 
            color="rgb(172, 172, 233)"/>}
        </div>
    )
}