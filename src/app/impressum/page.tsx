 "use client";

import React from 'react';

export default function ImprintPage() {
  return (
    <div className="mx-auto px-4 py-16 pt-28 max-w-4xl container">
      
      <div
      className="mx-auto p-8 rounded-lg max-w-2xl container"
    >
        <h1 className="mb-6 font-bold text-white text-3xl">
            Impressum
        </h1>
        <h2 className="mb-6 font-bold text-white text-2xl">
            Angaben gemäß § 5 TMG
        </h2>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-white text-xl">
            Milveo Capital GmbH
            </h2>
            <p className="mb-1">Marienstrasse 18</p>
            <p>71332 Waiblingen</p>
        </div>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-white text-xl">Vertreten durch</h2>
            <p>Geschäftsführung: Jochen Kauffmann</p>
        </div>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-white text-xl">Kontakt</h2>
            <p className="mb-1">Telefon: 07151 167 822 0</p>
            <p>E-Mail: <a href="mailto:office@milveo.com" className="text-white-600 underline">office@milveo.com</a></p>
        </div>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-white text-xl">Registereintrag</h2>
            <p className="mb-1">Eingetragen im Handelsregister.</p>
            <p className="mb-1">Registergericht: Amtsgericht Stuttgart</p>
            <p>Registernummer: HRB 775340</p>
        </div>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-white text-xl">Umsatzsteuer</h2>
            <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            </p>
            <p>DE334073789</p>
        </div>

        <div className="mb-6">
            <h2 className="mb-2 font-semibold text-gray-900 text-xl">Streitschlichtung</h2>
            <p className="mb-2">
            Die von der Europäische Kommission gestellten Plattform zur
            Online-Streitbeilegung (OS):
            </p>
            <p>
            <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-white underline"
                target="_blank"
                rel="noopener noreferrer"
                >https://ec.europa.eu/consumers/odr/</a
            >
            </p>
            <p className="mb-2">
            Die Firmen E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>

        <p className="text-white text-sm">Stand: 14.05.2024</p>
        </div>
    </div>
  );
}