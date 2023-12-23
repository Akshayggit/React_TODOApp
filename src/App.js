import Todo from './components/todo';

function App() {
  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: 'url(https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg)',
      backgroundSize: 'cover'
    }}
    >
      <Todo/>

    </div>
  )
}

export default App;