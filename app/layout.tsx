import './globals.css';
import Header from '../components/layout/Header';
import AccessibilityBar from '../components/layout/AccessibilityBar';
import WhatsAppButton from '../components/ui/WhatsAppButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        <AccessibilityBar />
        <Header />
        
        <main id="main-content">
          {children}
        </main>
        
        <WhatsAppButton />
      </body>
    </html>
  );
}