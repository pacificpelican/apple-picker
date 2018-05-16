import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1 id="apple-picker-index-header">Apple Picker software</h1>
    <h5 id="apple-picker-credit">by <a href="http://danmckeown.info">Dan McKeown</a></h5>
    <ul>

      <h6>Main Components</h6>
      <li><Link href='/Expenseform'><a>Expenseform</a></Link></li>
      <li><Link href='/Revenueform'><a>Revenueform</a></Link></li>

      <h6>UI Components</h6>
      <li><Link href='/textframe'><a>Textframe: UI menu</a></Link></li>
      
      <h6>API</h6>
      <li><Link href='/api/1/addexpense/amount/8/date/jan-12-2018/payee/cityofseattle/description/utility-bill/notes/some-notes/org/the-org'><a>Add expense API route example</a></Link></li>

      <h6>Boilerplate</h6>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
      <li><Link href='/Basiccomponent'><a>Basiccomponent</a></Link></li>

      <h6>Deprecated</h6>
      <li><Link href='/ladder'><a>Ladder (nav menu)</a></Link></li>
      <li><Link href='/Carform'><a>Carform</a></Link></li>
      <li><Link href='/api/1/addexpense/amount/8/user/djm/company/danco/'><a>Add expense API route example [old]</a></Link></li>
    </ul>
  </div>
)
