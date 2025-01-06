import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { get } from "aws-amplify/api"

export default function ShortUrl() {
  const { id } = useParams()

  useEffect(() => {
    const fetchUrl = async() => {
      try {
        const restOperation = get({
          apiName: 'apiurlshortener',
          path: '/',
          options: {
            queryParams: {
              id
            }
          }
        })
        const res = await restOperation.response;
        const body = await res.body.json()
        console.log(body)
        window.location.replace(body.url)
      } catch (error) {
        console.log("Error: ", error)
        console.log("Error: ", JSON.stringify(error, null, 2));
      }
    }
    fetchUrl()
  }, [id])

  return (
    <div>
      redirecting...
    </div>
  )
}