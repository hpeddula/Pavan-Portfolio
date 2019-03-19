import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Game1 = Loadable ({
    loader: () => import('./game1'),
    loading: Loading
}); 

export default Game1;