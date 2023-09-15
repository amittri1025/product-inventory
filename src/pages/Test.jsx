import React from "react";

const Test = () => {
  const person = [
    {
      username: {
        firstName: "Amit",
        secondName: "Tripathi",
      },
      Origin: {
        city: "Delhi",
        pincode: 110092,
        country: "India",
      },
      Parents : [
        {
            name: "Ashok Tripathi",
            age: 24,
            locations : {
                city: "Hapur",
                state : "Uttar Pradesh"
            }
        }, 
        {
            name: "Manisha Tripathi",
            age: 214,
            locations : {
                city: "Azamgarh",
                state : "Billo Pradesh"
            }
        }, 
      ]
    },
    {
        username: {
          firstName: "xoma",
          secondName: "mrunal",
        },
        Origin: {
          city: "numbara",
          pincode: 11002392,
          country: "kalle",
        },
        Parents : [
          {
              name: "halle siyaape",
              age: 53,
              locations : {
                  city: "Kehni",
                  state : "jead Pradesh"
              }
          }, 
          {
              name: "Hole baapee",
              age: 12,
              locations : {
                  city: "Azamgarh",
                  state : "Billo Pradesh"
              }
          }, 
        ]
      },
  ];

//   return <div>Here's the output : {person}</div>;
};

export default Test;
