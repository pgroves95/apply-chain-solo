import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css';
import WebFont from 'webfontloader'
import Nav from './components/Nav'
import { fetchApprovedApps, fetchUnreadApps } from './actions/viewApplicationsActions'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wnlybvcysuoqpgmrzpug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzM4MzIyMywiZXhwIjoxOTM4OTU5MjIzfQ.UuuwVjKp3UZA7zRbyoX1mCIzhZYRZEnqe5GTbha_ZTs'
const supabase = createClient(supabaseUrl, supabaseKey)




function App() {
  const dispatch = useDispatch()

    useEffect( () => {
      const getApps = async () => {
        let { data, error } = await supabase
        .from('Applications')
        .select("*")
        .eq('approved',true)
        return await fetchApprovedApps(dispatch, data)
        }
        getApps()
    })

    useEffect( () => {
      const getApps = async () => {
        let { data, error } = await supabase
        .from('Applications')
        .select("*")
        .eq('approved',false)
        return await fetchUnreadApps(dispatch, data)
        }
        getApps()
    })

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Marcellus', 'Dosis', 'Mitr']
      }
    })
  },[])
  return (
    <div>
      <Nav />
    </div>
  )
}

export default App;
