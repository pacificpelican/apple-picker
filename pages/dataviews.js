import React from 'react';
import Link from 'next/link';

export default () => (
  <div id="apple-picker-data-views">

     <h6>Main Components - Data Views</h6>
     <ul>
      <li><Link href='/Expensechart'><a>Expensechart</a></Link> | <Link href='/Expensechart2'><a>Expensechart2</a></Link></li>
      <li><Link href='/Revenuechart'><a>Revenuechart</a></Link> | <Link href='/Revenuechart2'><a>Revenuechart2</a></Link></li>
      <li><Link href='/Mileschart'><a>Mileschart</a></Link> | <Link href='/Mileschart2'><a>Mileschart2</a></Link></li>
      <li><Link href='/Timechart'><a>Timechart</a></Link> | <Link href='/Timechart2'><a>Timechart2</a></Link></li>
      <li><Link href='/Accountspayablechart'><a>Accountspayablechart</a></Link> | <Link href='/Accountspayablechart2'><a>Accountspayablechart2</a></Link></li>
      <li><Link href='/Accountsreceivablechart'><a>Accountsreceivablechart</a></Link> | <Link href='/Accountsreceivablechart2'><a>Accountsreceivablechart2</a></Link></li>
      <li><Link href='/Invoicechart'><a>Invoicechart</a></Link> | <Link href='/Invoicechart2'><a>Invoicechart2</a></Link></li>
      <li><Link href='/Clientschart'><a>Clientschart</a></Link> | <Link href='/Clientschart2'><a>Clientschart2</a></Link></li>
      <li><Link href='/Prospectschart'><a>Prospectschart</a></Link> | <Link href='/Prospectschart2'><a>Prospectschart2</a></Link></li>
      <li><Link href='/Pitcheschart'><a>Pitcheschart</a></Link> | <Link href='/Pitcheschart2'><a>Pitcheschart2</a></Link></li>
      <li><Link href='/Interactionschart'><a>Interactionschart</a></Link> | <Link href='/Interactionschart2'><a>Interactionschart2</a></Link></li>
      <li><Link href='/Taxeschart'><a>Taxeschart</a></Link> | <Link href='/Taxeschart2'><a>Taxeschart2</a></Link></li>
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
