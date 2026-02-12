export default function InvoicesPage() {}

export const getServerSideProps = async () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!url) return { props: { invoices: [], error: "Missing PUBLIC_API_URL" } };

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Error fetching invoice page data");

    const invoices = await res.json();

    return {
      props: { invoices },
    };
  } catch (err) {
    return {
      props: { invoices: [], error: err.message },
    };
  }
};
