import S2 from './S2';
import { Subcontext } from './ContextAPI';
import { useState } from 'react';

export default function SHead() {
    const [currSub, UpdateSub] = useState(" ");
  return (
    <div style={{ backgroundColor: 'beige', padding: 10 }}>
      <Subcontext.Provider value={currSub}>
        <select onChange={(e)=>UpdateSub(e.target.value)}>
            <option name="Maths" id="">Maths</option>
            <option name="History" id="">History</option>
            <option name="English" id="">English</option>
        </select>
        <S2 />
      </Subcontext.Provider>
    </div>
  );
}
