import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-6">Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 bg-[#1D70E8] text-white rounded-full">
        Return Home
      </Link>
    </main>
  );
}
