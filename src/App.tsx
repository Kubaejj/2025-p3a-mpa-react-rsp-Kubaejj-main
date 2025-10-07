import './App.css'
import './assets/fonts/Limelight-Regular.ttf';
import Choices from './components/Choices';
import Figure from './components/Figure';
import Layout from './components/Layout';
import PlayPage from './pages/PlayPage';



function App() {
  return (
    <>
      <Layout>
        <PlayPage />
      </Layout>
    </>
  )
}

export default App
