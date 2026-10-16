import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/data/site";

function ClientIdentity({ client }: { client: (typeof clients)[number] }) {
  return (
    <>
      <div className={`client-logo client-logo-${client.appearance}`}>
        <Image
          src={client.logo}
          alt=""
          fill
          sizes="(max-width: 700px) 45vw, (max-width: 1400px) 23vw, 280px"
          className="client-logo-image"
        />
      </div>
      <span className="client-name">
        {client.name}
        {client.href && <ArrowUpRight size={15} aria-hidden="true" />}
      </span>
    </>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="shell clients-section" aria-labelledby="clients-heading">
      <h2 id="clients-heading" className="eyebrow clients-heading">Our clients</h2>
      <ul className="clients-grid">
        {clients.map((client) => (
          <li key={client.name} className="client-card">
            {client.href ? (
              <a href={client.href} target="_blank" rel="noopener noreferrer" className="client-identity" aria-label={`Visit ${client.name} (opens in a new tab)`}>
                <ClientIdentity client={client} />
              </a>
            ) : (
              <div className="client-identity"><ClientIdentity client={client} /></div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
