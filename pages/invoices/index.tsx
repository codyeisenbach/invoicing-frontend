export default function InvoicesPage({ invoices, error }) {
  if (typeof error.message !== undefined) {
    console.log("Error", error.message);
  } else {
    console.log("Invoices", invoices);
  }
  return (
    <div className="max-w-3xl m-5 w-full h-full max-h-40 flex bg-gray-300">
      test
    </div>
  );
}

export const getServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  console.log("url: ", url);

  if (!url) return { props: { invoices: [], error: "Missing PUBLIC_API_URL" } };

  try {
    const res = await fetch(url);
    console.log("invoices res: ", res);

    if (!res.ok) throw new Error("Error fetching invoice page data");

    const invoices = await res.json();

    console.log("invoices res: ", invoices);

    return {
      props: { invoices },
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.log("message: ", message);
    return {
      props: { invoices: [], error: message },
    };
  }
};
