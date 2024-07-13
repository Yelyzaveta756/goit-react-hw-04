import { Audio } from 'react-loader-spinner'

export default function Loader({ loading }) {
    
    return (
        <div>
            {loading && <Audio />}
        </div>
    )
}