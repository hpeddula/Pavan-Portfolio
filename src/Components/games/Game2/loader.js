import Loadable from 'react-loadable';
import Loading from '../../loader/loading';
const Game2 = Loadable ({
    loader: () => import('../Game2/game2'),
    loading: Loading
}); 

export default Game2;