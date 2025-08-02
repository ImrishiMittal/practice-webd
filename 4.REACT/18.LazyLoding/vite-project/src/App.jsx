import React, { Suspense, useState } from "react";
const LazyProfile = React.lazy(() => import("./Profile"));

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <h1>React Lazy Loading Example</h1>

      <button onClick={() => setShowProfile(true)}>
        Load Profile Component
      </button>

      {showProfile && (
        <Suspense fallback={<p>Loading Profile...</p>}>
          <LazyProfile />
        </Suspense>
      )}
    </div>
  );
}

export default App;
