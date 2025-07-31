import { useTransition, useState } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    startTransition(async () => {
      setSubmitted(false);

      // 🔁 Real 3 second delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setSubmitted(true);
      alert('Form submitted!');
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br /><br />

      <button type="submit" disabled={isPending} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isPending ? (
          <img
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
            alt="Loading..."
            style={{ width: '24px', height: '24px' }}
          />
        ) : 'Submit'}
      </button>

      <br /><br />
      {submitted && <p style={{ color: 'green' }}>Form successfully submitted!</p>}
    </form>
  );
}

export default App;

