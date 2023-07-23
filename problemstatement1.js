const idList = { user1: { id: 1 }, user2: { id: 2 } };

const addressObj = {
  1: "Bangalore, Karnataka, India",
  2: "Mysore, Karnataka, India",
  3: "New Delhi, NCR, India",
};

const nameList = {
  1: {
    name: {
      fullName: "Alan",
    },
  },
  2: {
    name: {
      fullName: "John",
    },
  },
  3: {
    name: {
      fullName: "Mike",
    },
  },
};


    console.log(
        Object.values(idList).map(({ id }) => [
          id,
          nameList[id].name.fullName,
          addressObj[id],
        ])
      );


//o/p=>[[1,"Alan", "Bangalore, Karnataka, India" ], [2, "John", "Mysore, Karnataka, India"]]
