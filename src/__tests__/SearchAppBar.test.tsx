import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { setupStore } from '../store/store';

import SearchAppBar from './../components/SearchAppBar/SearchAppBar';

const store = setupStore();

describe('SearchAppBar', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
    <Provider store={store}>
      <SearchAppBar />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});