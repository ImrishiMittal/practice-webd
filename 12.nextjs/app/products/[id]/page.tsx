/*export default async function ProductPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
  
    return (
      <div>
        <h1>Product ID: {id}</h1>
      </div>
    );
  }*/
  export default async function Product({
    params,
    searchParams,
  }: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{
      color?: string;
      size?: string;
    }>;
  }) {
    const { id } = await params;
    const { color, size } = await searchParams;
  
    return (
      <>
        <h1>Product {id}</h1>
  
        <p>Color: {color}</p>
  
        <p>Size: {size}</p>
      </>
    );
  }