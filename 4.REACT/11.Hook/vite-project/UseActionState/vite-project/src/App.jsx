import { useState } from 'react';

function App() {
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setMessage('');

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    await new Promise((res) => setTimeout(res, 2000));

    if (username === 'admin' && password === '1234') {
      setSuccess(true);
      setMessage('Login successful!');
    } else {
      setSuccess(false);
      setMessage('Invalid credentials.');
    }

    setIsPending(false);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required style={{ padding: '8px' }} />
        <br /><br />
        <input type="password" name="password" placeholder="Password" required style={{ padding: '8px' }} />
        <br /><br />
        <button type="submit" disabled={isPending} style={{ padding: '10px 20px' }}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <br />
      <p style={{ color: success ? 'green' : 'red' }}>{message}</p>
    </div>
  );
}

export default App;
