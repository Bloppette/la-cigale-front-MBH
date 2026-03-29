import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gold/20 px-4 py-3 flex justify-between items-center">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <SectionTitle level={1}>La Cigale</SectionTitle>
      </Link>
      <Button variant="primary">Réserver</Button>
    </header>
  );
}
