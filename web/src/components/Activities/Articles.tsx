import axios from 'axios'
import { Card } from '../Card'
import { useEffect, useState } from 'react'

export const Articles = () => {
  const getArticles = async () => {
    const { data } = await axios.get('/api/articles.json?limit=10')
    console.log(data)

    setArticles(data.articles)
  }

  const [articles, setArticles] = useState<any[]>()

  useEffect(() => {
    getArticles()
  }, [])

  return <Card />
}
