import Loadable from 'react-loadable';
import Loading from '../loader/loading';
const Footer = Loadable ({
    loader: () => import('./footer'),
    loading: Loading
}); 

export default Footer;