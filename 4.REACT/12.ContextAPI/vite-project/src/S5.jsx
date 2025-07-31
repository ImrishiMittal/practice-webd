import { useContext } from "react";
import { Subcontext } from "./ContextAPI";
export default function S5() {
    const sub = useContext(Subcontext)
    return (
      <div style={{ backgroundColor: 'brown', padding: 10 }}>
        <h1>S5 is {sub}</h1>
      </div>
    );
  }