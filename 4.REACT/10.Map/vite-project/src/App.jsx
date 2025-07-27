import { useState } from 'react'

function App() {
  const Userdata = [
    {
      name: 'RISHI',
      id: 1
    },
    {
      name: 'RISHI M',
      id: 2
    },
    {
      name: 'RISHI MI',
      id: 3
    },
    {
      name: 'RISHI MITTAL',
      id: 4
    }
  ]

  return (
    <>
      <div>
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {Userdata.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
