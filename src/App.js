import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './comps/ChatFeed'
import LoginForm from './comps/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height='100vh'
      projectID='d7aab84e-9c73-40bb-9e07-9baeda703058'  
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
