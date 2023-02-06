import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import store from './featuers/stor';
function App() {
  return (
 <Provider store={store}>
     <div className="bg-gray-900 h-screen flex flex-col items-center justify-start ">
     <header className="flex flex-col items-center my-4 md:my-6">
      <h1 className="font-bold text-white text-2xl mb-2 md:text-3xl">TO DO LIST</h1>
     </header>
     <TodoApp/>
    </div>
 </Provider>
  );
}

export default App;
