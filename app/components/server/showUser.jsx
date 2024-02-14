'use client'

import { useState, useEffect } from "react"

export default function Cart() {
  const [datas, setDatas] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch ('/api/users')
      const data = await res.json()
      setDatas(data)
      setLoading(true)
    }
    fetchDatas();
  }, [])

  if (datas) {
    console.log(datas.username)
    console.log(datas.email)
  }

  return (
    <>
      {isLoading ? (<p>Username: {datas.username} </p>) : (<p>Chargement...</p>)}
    </>
  );
}