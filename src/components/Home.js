import React from 'react';
import Instrument from './Instrument';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = ({instruments}) => {
  const instrumentList = instruments;
  console.log('instrumentList at home', instrumentList[0].id);
  // const [Instruments, setInstruments] = useState([]);
//   const Instruments = useSelector((state) => state);
  // const Instruments = props.instrument;
  // const Instruments = useSelector((state) => state);


  // const API_URL = "http://127.0.0.1:3000/api/v1/instruments.json";
  // const dispatch = useDispatch();
  // if (Instruments.length > 0){
  // Instruments.map((instrument) => 
  //   {
  //     console.log("instrument # ", instrument);

  //   });//}
// console.log("instruments at home: ",Instruments);
//   const fetch = () =>{
//     axios.get(API_URL)
//     .then(response => {
//       // const token = response.headers.get("Authorization");
//       // console.log(response.data);
//       setInstruments(response.data);
//     })
//     .catch(err => console.log(err));
//   }

  // React.useEffect(() => {
  //   axios.get(API_URL).then((response) => {
  //     console.log(response);
  //     setInstrument(response.data);
  //   });
  // }, []);

  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(API_URL).then((response) => {
  //     console.log(response);
  //     setPost(response.data);
  //   });
  // }, []);



//   const login= async ()=>{
//     try{
//     const response= await fetch(API_URL, {
//         method: "get",
//     })
//     const data=await response.json()
//     console.log(response)     
//     if(!response.ok) throw data.error
    
// }catch(error){
//    console.log("error", error)
// }
// }
// login();

//  const recieveBooks = () => async () => {
//   await fetch(API_URL)
//   .then((res) => res.json())
//   .then((books) => {
//     console.log(books)
      // const bookList = [];
      // Object.keys(books).map((key) => {
      //   bookList.push({
      //     item_id: key,
      //     title: books[key][0].title,
      //     author: books[key][0].author,
      //     category: books[key][0].category,
      //   });
      // });
      // dispatch(read(bookList));
    // });
// };
//  const recieveBooks = () => async () => {
//   await fetch(APIURL)
//     .then((res) => res.json())
//     .then((books) => {
//       consol.log('response = ',books);
      // const bookList = [];
      // Object.keys(books).map((key) => {
      //   bookList.push({
      //     item_id: key,
      //     title: books[key][0].title,
      //     author: books[key][0].author,
      //     category: books[key][0].category,
      //   });
      // });
      // dispatch(read(bookList));
//     });
// };
// if (Instruments.length === 0) {

    // useEffect(() => async () => {
    //   await dispatch(fetch());
    // }, []);
  // }
  const dummyList = [
    {
      id: 0,
      userid: 21,
      name: 'Violen1',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      available: true,
      price: 22,
    },
    {
      id: 1,
      userid: 22,
      name: 'Violen2',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      available: true,
      price: 22,
    },
    {
      id: 2,
      userid: 23,
      name: 'Violen3',
      description: 'FUN TO LEARN - This mini toy violin teaches children the basics of playing violin to prepare them for a lifetime of music education and appreciation. It is not only fun, it also helps them to learn tone, rhythm and even hand-eye coordination. KID SIZED - The toy violin is the perfect size for your future musician. It features a small and light plastic body that is easy for little ones to handle. The 4 strings produce musical sounds when pressed so that little ones can pretend to play songs. REALISTIC LOOK - Kids will love the fact that this looks and feels just like a real violin! This fun kid’s violin features adjustable strings that play notes when pressed down, and the body has a woodgrain look and comes with a bow.',
      image: 'https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2020/09/German_maple_Violin-scaled.jpeg?fit=703%2C768&quality=100&strip=all&ssl=1',
      category: 'String Instrument',
      available: true,
      price: 22,
    },
  ];

  return (
    <div>
      <h1>🎵🎶🎼 INSTRUMENTS 🎵🎶🎼</h1>
      <h3>Please select an instrument</h3>

      {/* {instrumentList.map((instrument) => ( */}
        <Instrument
          // key={instrumentList[0].id}
          name={instrumentList[0].name}
          id={instrumentList[0].id}
          description={instrumentList[0].description}
          // image={instrument.image}
          category={instrumentList[0].category}
          price={instrumentList[0].price}
        />
      {/* ))} */}

    </div>
  );
};

export default Home;
