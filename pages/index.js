import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1 id="apple-picker-index-header">Apple Picker software</h1>
    <h5 id="apple-picker-credit">by <a href="http://danmckeown.info">Dan McKeown</a></h5>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
      <li><Link href='/Basiccomponent'><a>Basiccomponent</a></Link></li>
      <li><Link href='/ladder'><a>Ladder (nav menu)</a></Link></li>
      <li><Link href='/api/1/addexpense/amount/8/user/djm/company/danco/'><a>Add expense API route example</a></Link></li>
    </ul>
  </div>
)
