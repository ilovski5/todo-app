import React from 'react';
import Layout from './components/Layout';
import ToDo from './pages/todo';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Layout>
      <LoadingScreen />
      <ToDo />
    </Layout>
  );
}

export default App;
