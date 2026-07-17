export default async function Page({
    params,
  }: {
    params: Promise<{
      category: string;
      id: string;
    }>;
  }) {
    const { category, id } = await params;
  
    return (
      <>
        <h1>{category}</h1>
        <h2>{id}</h2>
      </>
    );
  }