export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <div className="absolute text-center bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex uppercase text-sm text-[#838181]">
        <div className="flex flex-col gap-4">
          <p>To get better results make sure to have</p>
          <div className="flex gap-4">
            <p>⬦ Neutral Expression</p>
            <p>⬦ Frontal Post</p>
            <p>⬦ Adequate Lighting</p>
          </div>
        </div>
      </div>
    </main>
  );
}
