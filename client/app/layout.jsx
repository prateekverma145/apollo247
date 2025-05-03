import './globals.css';

export const metadata = {
  title: 'Doctor Listing App',
  description: 'Find and consult with doctors online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
} 