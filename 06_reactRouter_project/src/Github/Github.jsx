import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();

  // 1st and Easy Method
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/RtkMor')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  return (
    <div className='container text-center'>
      <div className='my-5 bg-info p-2'>
        <p className='h4'>Followers Count - {data.followers}</p>
        <img src={data.avatar_url} alt="rtkmorPFP" width="200" height="200"/>
      </div>
      <div className='my-5'><
        a href={data.html_url} className='my-5'>Click Here!</a>
      </div>
    </div>
  )
}

export default Github

export const renderData = async () => {
  const response = await fetch('https://api.github.com/users/RtkMor')
  return response.json();
}
