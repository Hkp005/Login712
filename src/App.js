
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="loginform">
        <form>
          <h4>Login Here</h4>
          <label htmlFor="username">Username</label>
          <input className="textinput" type="text" name="username" placeholder="Enter your username here" required/>
          <label htmlFor="password">password</label>
          <input className="textinput" type="text" name="password" placeholder="Enter your password here" required/>
          <input className="button" type="submit" value="login"/>
        </form>

      </div>

    </div>
  );
}

export default App;
