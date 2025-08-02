import React, { Suspense, useState } from "react";

const UserList = React.lazy(() => import("./UserList")); // 👈 Lazy load

function App() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="App">
      <h1>React Lazy Loading with API Example</h1>

      <button onClick={() => setShowUsers(true)}>Load Users</button>

      {showUsers && (
        <Suspense fallback={<p>Loading Component...</p>}>
          <UserList />
        </Suspense>
      )}
    </div>
  );
}

export default App;
