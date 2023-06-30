import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  console.log('projectID', process.env.REACT_APP_PROJECT_ID)
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps }/>}
    />
  );
}

export default App;
