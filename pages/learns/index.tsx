import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import LandingPageLayout from '../../layouts/LandingPageLayout'


const Learn: NextPage = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  
  const { data: userData, error } = useSWR('https://jsonplaceholder.typicode.com/users', (path) => {
    return fetch(path)
      .then(res => res.json())
      .then(data => data);
  })

  useEffect(() => {
    if (!userData) return;
    console.log('effect')
    setData(userData)
  }, [userData])

  console.log(count);

  return (
    <LandingPageLayout pageName="Learning Page">
      <button type="button" className="bg-blue-100 px-5 py-1 rounded-sm">Load</button>
      {
        data ? data.map((d: any) => (
          <p key={d.id}>
            {d.name +' : ' + d.email}
          </p>
        ))
      : null}
    </LandingPageLayout>
  )
}

export default Learn;
