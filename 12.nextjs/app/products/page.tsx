type Props = {
  params: Promise<{
    id: string;
  }>;
};

// Runs at BUILD TIME
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        {product.title}
      </h1>

      <p className="mt-4">
        {product.body}
      </p>
    </div>
  );
}