import Counter from "@/components/Counter";
export default function ClientServer() {
    console.log("Running on Server");
  
    return (
      <div className="p-5">
        <h1>Server Component</h1>
        <Counter/>
      </div>
    );
  }