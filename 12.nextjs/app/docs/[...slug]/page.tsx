/*export default async function DocsPage({
    params,
  }: {
    params: Promise<{ slug: string[] }>;
  }) {
    const { slug } = await params;
  
    return (
      <div>
        <h1>Documentation</h1>
  
        <p>{JSON.stringify(slug)}</p>
      </div>
    );
  }*/

  export default async function DocsPage({
    params,
  }: {
    params: Promise<{ slug: string[] }>;
  }) {
    const { slug } = await params;
  
    return (
      <div>
        <h1>Catch-all Route</h1>
  
        <p>{JSON.stringify(slug)}</p>
      </div>
    );
  }