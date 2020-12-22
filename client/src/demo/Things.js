import {Header, Segment, Dimmer, Loader} from "semantic-ui-react"
import { useEffect, useState } from "react"
import Axios from "axios"

export default () => {

  const [things, setThings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    getThings()
  },[])

  const getThings = async () => {
    try { 
      let res = await Axios.get("/api/things")
      setThings(res.data)

    } catch (err) {
      console.log(err)
      setError(true)

    } finally {
      setLoading(false)
    }
  }

  const renderThings = ()=>{
    if (loading){ return(
      <Segment>
      <Dimmer active>
        <Loader />
      </Dimmer>
    </Segment>
    )
   }
    if (error){ return <p>Please login in to see this page.</p> }
    return things.map((t, index)=>{
      return (
        <div key={index} >
          {t.name}
        </div>
      )
    })
  }


  return (
    <>
    <Header>Things</Header>
    {renderThings()}
    </>
  )
}