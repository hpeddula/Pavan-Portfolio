import Loadable from 'react-loadable';
import Loading from '../loader/loading';
const NotFound = Loadable ({
    loader: () => import('./NotFound'),
    loading: Loading
}); 

export default NotFound;