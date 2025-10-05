import Image from "next/image";
import { Button } from "@hiipa/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh bg-white">
      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="flex items-center gap-4">
          <Image
            src="/hiipa.svg"
            alt="Hiipa logo"
            width={64}
            height={64}
            priority
          />
          <h1 className="text-3xl font-bold">Hiipa</h1>
        </div>

        <p className="max-w-xl text-center text-gray-600">
          Automated Yield Rebalancing agent for the Aptos blockchain. Hiipa
          continuously monitors yields and rebalances allocations to help
          maintain optimal returns and risk profiles across Aptos protocols.
        </p>

        <div className="flex gap-3">
          <Button asChild>
            <a
              href="https://github.com/fullendmaestro/hiipa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
          </Button>

          <Button variant="ghost" asChild>
            <a href="/app/docs" aria-label="Documentation">
              Docs
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
