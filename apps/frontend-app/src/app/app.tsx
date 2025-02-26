// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Shared } from '@foo/shared';
import { common } from '@foo/common';

export function App() {
  return (
    <div>
      <h1> Hola {common()}</h1>
      <Shared/>
      <NxWelcome title="@foo/frontend-app" />
    </div>
  );
}

export default App;
