import React from 'react';
import Link from 'next/link';

import Textframe from "./textframe";
import Dataentry from "./dataentry";
import Dataviews from "./dataviews";

export default () => (
  <div id="apple-picker-container">
    <h1 id="title">Apple Picker software <i>HELP</i></h1>

    <Textframe />
    
    <ul>
      <Dataentry />

      <Dataviews />
      
      <h6>read API</h6>
      <li><Link href='/api/1/getexpenses/org/lovebirdsconsulting/limit/100'><a>Get expenses as a JSON array</a></Link></li>
      <li><Link href='/api/1/getrevenue/org/lovebirdsconsulting/limit/100'><a>Get revenue as a JSON array</a></Link></li>
      <li><Link href='/api/1/getmiles/org/altaredwood/limit/100'><a>Get miles as a JSON array</a></Link></li>
      <li><Link href='/api/1/gettime/org/altaredwood/limit/100'><a>Get time sheet data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getpayables/org/altaredwood/limit/100'><a>Get A/P data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getreceivables/org/altaredwood/limit/100'><a>Get A/R data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getinvoices/org/someOrg/limit/100'><a>Get Invoice data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getprospects/org/null/limit/100'><a>Get Prospect data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getclients/org/null/limit/100'><a>Get Client data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getpitches/org/null/limit/100'><a>Get Pitch data as a JSON array</a></Link></li>
      <li><Link href='/api/1/getinteractions/org/null/limit/100'><a>Get Interaction data as a JSON array</a></Link></li>
      <li><Link href='/api/1/gettaxes/org/org/limit/100'><a>Get tax payments data as a JSON array</a></Link></li>
      
      <h6>write API [will create sample data in database]</h6>
      <li className="wrong"><Link href='/api/1/addexpense/amount/8/date/jan-12-2018/payee/cityofseattle/description/utility-bill/notes/api-example/org/the-org'><a>Add expense API route example</a></Link></li>
      <li className="wrong"><Link href='/api/1/addrevenue/amount/500/date/5-19-2018/payer/yoga-studio-client/description/design-services-schedule-integration/notes/api-example/org/altaredwood'><a>Add revenue API route example</a></Link></li>
      <li className="wrong"><Link href='/api/1/addmiles/amount/68/date/7-7-2018/destination/Tacoma-Yoga-Studio/embarkment/home-office/description/guest-teaching/roundtrip/true/notes/api-example/org/South-Side-yoga'><a>Add miles API route example</a></Link></li>
      <li className="wrong"><Link href='/api/1/addtime/amount/4.5/date/6-20-2018/client/corporateClient/description/contract-work/notes/api-example/org/altaredwood'><a>Add time API route example</a></Link></li>
      <li><Link href='/api/1/addpayable/amount/100/date/2018-07-04/payee/Indiana-Store/description/fireworks/notes/api-write-test/org/undefined'><a>Add A/P API route example</a></Link></li>
      <li><Link href='/api/1/addreceivable/amount/75/date/2018-07-04/payee/BigCo/description/web-design-services/notes/API-example/org/undefined'><a>Add A/R API route example</a></Link></li>
      <li><Link href='/api/1/addinvoice/amount/50/date/2018-07-04/payee/BigCo/description/sample/notes/sample-data/org/LoveBirdsConsulting/arid/null'><a>Add InvoiceAPI route example</a></Link></li>
      <li><Link href='/api/1/addclient/amount/100000/date/2018-07-06/client/New-Client/description/local-company/notes/sample-data/org/undefined/prospectid/null'><a>Add Client route example</a></Link></li>
      <li><Link href='/api/1/addprospect/amount/1000000/date/2018-07-06/client/Company-A/description/corporate/notes/sample-data/org/undefined'><a>Add Prospect route example</a></Link></li>
      <li><Link href='api/1/addpitch/amount/8000000/date/2018-07-06/client/CorpCo/description/Redmond%20company/notes/sample-data/org/undefined/prospectid/null'><a>Add Pitch route example</a></Link></li>
      <li><Link href='/api/1/addinteraction/amount/100/date/2018-07-06/client/City%20of%20Seattle/description/the%20city/notes/sample-data/org/undefined/prospectid/null'><a>Add Interaction route example</a></Link></li>
      <li><Link href='/api/1/addtax/amount/850/date/2018-07-11/payee/an-agency/description/sample-data/notes/api-example/org/undefined/apid/null'><a>Add tax payment route example</a></Link></li>
    
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
      Apple Picker was created by <a href="http://danmckeown.info">Dan McKeown</a> at <a href="http://altaredwood.work">Alta Redwood</a>
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
            .wrong {
              background-color: red;
            }
            .right {
              background-color: green;
            }
            `}
    </style>
  </div>
)
