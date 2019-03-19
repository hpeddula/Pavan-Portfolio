import Loadable from 'react-loadable';
import Loading from './Components/loader/loading';
const App = Loadable ({
    loader: () => import('./App'),
    loading: Loading
}); 

export default App;