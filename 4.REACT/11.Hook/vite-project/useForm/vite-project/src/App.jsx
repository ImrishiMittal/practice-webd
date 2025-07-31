import { useState } from 'react';

function SubmitButton({ isPending }) {
  return (
    <button type="submit" disabled={isPending} style={{ position: 'relative', padding: '8px 16px' }}>
      {isPending ? (
        <img
          src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif" 
          alt="Loading..."
          style={{ height: '200px' }}
        />
      ) : (
        'Submit'
      )}
    </button>
  );
}

function App() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    alert('Form submitted!');
    setIsPending(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <SubmitButton isPending={isPending} />
    </form>
  );
}

export default App;
