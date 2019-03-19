import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Other1 = Loadable ({
    loader: () => import('./Other1'),
    loading: Loading
}); 

export default Other1;