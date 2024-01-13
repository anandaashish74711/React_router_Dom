import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

function Github() {
  // Using useLoaderData to get data fetched by the loader
  const data = useLoaderData();

  // Alternatively, you can use state and useEffect for data fetching
  // const [data, setData] = React.useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/anandaashish74711')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt='' />
    </div>
  );
}

export default Github;

// Loader function to fetch GitHub user information
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/anandaashish74711');
  
  return response.json();
  console.log(data.response)
  
};
