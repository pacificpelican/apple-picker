import React from 'react';
import Link from 'next/link';

export default () => (
  <div id="apple-picker-data-entry">

      <h6>Main Components - Data Entry</h6>
      <ul>
      <li><Link href='/Expenseform'><a>Expenseform</a></Link></li>
      <li><Link href='/Revenueform'><a>Revenueform</a></Link></li>
      <li><Link href='/Carform'><a>Carform</a></Link></li>
      <li><Link href='/Timeform'><a>Timeform</a></Link></li>
      <li><Link href='/Accountspayableform'><a>Accountspayableform</a></Link></li>
      <li><Link href='/Accountsreceivableform'><a>Accountsreceivableform</a></Link></li>
      <li><Link href='/Invoiceform'><a>Invoiceform</a></Link></li>
      <li><Link href='/Clientsform'><a>Clientsform</a></Link></li>
      <li><Link href='/Prospectsform'><a>Prospectsform</a></Link></li>
      <li><Link href='/Pitchesform'><a>Pitchesform</a></Link></li>
      <li><Link href='/Interactionsform'><a>Interactionsform</a></Link></li>
      <li><Link href='/Taxesform'><a>Taxesform</a></Link></li>
  </ul>
    <style>{`
            div#apple-picker-container {
              border-radius: 8px;
              padding: 0.25em 1em;
              margin: 0 1em;
              background: #e8dddc;
              color: black;
              border: 2px solid;
              border-color: #f2bbb8;
              font-family: Hack, Menlo, monospace;
            }
            h1#title {
              color: red;
              font-size: 40px;
            }
            footer#apple-picker-footer {
              border: 1px solid;
              border-color: limegreen;
            }
            `}
    </style>
  </div>
)
