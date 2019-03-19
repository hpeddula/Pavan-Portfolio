import Loadable from 'react-loadable';
import Loading from '../loader/loading';
const Body = Loadable ({
    loader: () => import('./body'),
    loading: Loading
}); 

export default Body;