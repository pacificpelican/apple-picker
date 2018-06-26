import React from 'react';
import Link from 'next/link';

export default () => (
  <div id="apple-picker-container">
    <h1 id="title">Apple Picker software</h1>
    <h5 id="apple-picker-credit">by <a href="http://danmckeown.info">Dan McKeown</a></h5>
    <ul>

      <h6>Main Components - Data Entry</h6>
      <li><Link href='/Expenseform'><a>Expenseform</a></Link></li>
      <li><Link href='/Revenueform'><a>Revenueform</a></Link></li>
      <li><Link href='/Carform'><a>Carform</a></Link></li>
      <li><Link href='/Timeform'><a>Timeform</a></Link></li>
      <li><Link href='/Accountspayableform'><a>Accountspayableform</a></Link></li>
      <li><Link href='/Accountsreceivableform'><a>Accountsreceivableform</a></Link></li>

      <h6>Main Components - Data Views</h6>
      <li><Link href='/Expensechart'><a>Expensechart</a></Link></li>
      <li><Link href='/Revenuechart'><a>Revenuechart</a></Link></li>
      <li><Link href='/Mileschart'><a>Mileschart</a></Link></li>
      <li><Link href='/Timechart'><a>Timechart</a></Link></li>
      <li><Link href='/Accountspayablechart'><a>Accountspayablechart</a></Link></li>
      <li><Link href='/Accountsreceivablechart'><a>Accountsreceivablechart</a></Link></li>
      
      <h6>read API</h6>
      <li><Link href='/api/1/getexpenses/org/lovebirdsconsulting/limit/10'><a>Get expenses as a JSON array</a></Link></li>
      <li><Link href='/api/1/getrevenue/org/lovebirdsconsulting/limit/10'><a>Get revenue as a JSON array</a></Link></li>
      <li><Link href='/api/1/getmiles/org/altaredwood/limit/10'><a>Get miles as a JSON array</a></Link></li>
      <li><Link href='/api/1/gettime/org/altaredwood/limit/10'><a>Get time sheet data as a JSON array</a></Link></li>
      
      <h6>write API</h6>
      <li><Link href='/api/1/addexpense/amount/8/date/jan-12-2018/payee/cityofseattle/description/utility-bill/notes/api-example/org/the-org'><a>Add expense API route example</a></Link></li>
      <li><Link href='/api/1/addrevenue/amount/500/date/5-19-2018/payer/yoga-studio-client/description/design-services-schedule-integration/notes/api-example/org/altaredwood'><a>Add revenue API route example</a></Link></li>
      <li><Link href='/api/1/addmiles/amount/68/date/7-7-2018/destination/Tacoma-Yoga-Studio/embarkment/home-office/description/guest-teaching/roundtrip/true/notes/api-example/org/South-Side-yoga'><a>Add miles API route example</a></Link></li>
      <li><Link href='/api/1/addtime/amount/4.5/date/6-20-2018/client/corporateClient/description/contract-work/notes/api-example/org/altaredwood'><a>Add time API route example</a></Link></li>
      
      <h6>UI Components</h6>
      <li><Link href='/textframe'><a>Textframe: UI menu</a></Link></li>

      <h6>Boilerplate</h6>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
      <li><Link href='/Basiccomponent'><a>Basiccomponent</a></Link></li>

      <h6>Deprecated</h6>
      <li><Link href='/ladder'><a>Ladder (nav menu)</a></Link></li>
      <li><Link href='/Carform'><a>Carform</a></Link></li>
      <li><Link href='/api/1/addexpense/amount/8/user/djm/company/danco/'><a>Add expense API route example [old]</a></Link></li>
    </ul>

    <footer id="apple-picker-footer">
      Apple Picker was created by <a href="http://danmckeown.info">Dan McKeown</a>
    </footer>
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
