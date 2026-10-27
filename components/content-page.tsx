export default function ContentPage({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">{title}</h1>
      <div className="prose dark:prose-invert prose-slate">
        {children}
      </div>
    </main>
  );
}
