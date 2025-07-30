import React, { useState, useEffect } from "react";

export default function CittadinoInforma() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const mockNews = [
      {
        title: "Assegno Unico 2025: nuove soglie ISEE e importi aggiornati",
        date: "2025-07-20",
        summary:
          "L'INPS ha aggiornato le soglie ISEE per l'assegno unico a partire da agosto 2025.",
        source: "https://www.inps.it/news/assegno-unico-2025-nuove-soglie",
        category: "Famiglia",
      },
      {
        title: "Bonus Affitto Giovani confermato per il 2025",
        date: "2025-07-18",
        summary:
          "Il MEF ha confermato l'estensione del bonus affitto per gli under 31 con reddito inferiore a 15.493 €.",
        source: "https://www.mef.gov.it/bonus-affitto-giovani-2025",
        category: "Casa",
      },
    ];
    setArticles(mockNews);
  }, []);

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>🧾 Cittadino Informa</h1>
      <input
        type="text"
        placeholder="Cerca notizie..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: 10,
          width: '100%',
          marginBottom: 20,
          fontSize: 16
        }}
      />
      {filtered.map((a, i) => (
        <div key={i} style={{ marginBottom: 20, padding: 20, background: '#fff', borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2>{a.title}</h2>
          <p><strong>Data:</strong> {a.date}</p>
          <p>{a.summary}</p>
          <p><strong>Fonte:</strong> <a href={a.source} target="_blank" rel="noopener noreferrer">{a.source}</a></p>
        </div>
      ))}
    </div>
  );
}