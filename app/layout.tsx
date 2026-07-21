import "./globals.css";

// Root layout defers html/body to [locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
