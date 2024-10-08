import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className="bg-cyber-black text-cyber-white">{children}</body>
    </html>
  );
}
