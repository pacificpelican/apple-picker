import React from 'react';
import Link from 'next/link';

export default () => (
  <div id="apple-picker-data-views">

     <h6>Main Components - Data Views</h6>
     <ul>
      <li><Link href='/Expensechart'><a>Expensechart</a></Link> | <Link href='/Expensechart2'><a>Expensechart2</a></Link></li>
      <li><Link href='/Revenuechart'><a>Revenuechart</a></Link></li>
      <li><Link href='/Mileschart'><a>Mileschart</a></Link></li>
      <li><Link href='/Timechart'><a>Timechart</a></Link></li>
      <li><Link href='/Accountspayablechart'><a>Accountspayablechart</a></Link> | <Link href='/Accountspayablechart2'><a>Accountspayablechart2</a></Link></li>
      <li><Link href='/Accountsreceivablechart'><a>Accountsreceivablechart</a></Link></li>
      <li><Link href='/Invoicechart'><a>Invoicechart</a></Link></li>
      <li><Link href='/Clientschart'><a>Clientschart</a></Link></li>
      <li><Link href='/Prospectschart'><a>Prospectschart</a></Link></li>
      <li><Link href='/Pitcheschart'><a>Pitcheschart</a></Link></li>
      <li><Link href='/Interactionschart'><a>Interactionschart</a></Link></li>
      <li><Link href='/Taxeschart'><a>Taxeschart</a></Link></li>
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
