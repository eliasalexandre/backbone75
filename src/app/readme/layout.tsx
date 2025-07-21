export default function ReadmeBasicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="min-h-screen">
        <section className="px-4 lg:px-10 pb-10 pt-4 lg:pt-10">
          {children}
        </section>
      </div>

      <section className="hidden items-center justify-center p-4 text-center text-sm lg:text-xs space-x-4">
        <span>&copy;Backbone</span>
        <div>
          <span>todos os direitos reservados</span>
          <span> - {new Date().getUTCFullYear()}</span>
        </div>
      </section>
    </main>
  );
}
