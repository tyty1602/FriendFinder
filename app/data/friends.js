//Example friend object from HW instructions

var friendsListArr = [
{
    "name":"Aloha",
    "photo":"https://picsum.photos/200",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Lan",
    "photo":"https://picsum.photos/200",
    "scores":[
        4,
        5,
        1,
        1,
        5,
        5,
        5,
        5,
        5,
        5
      ]
  }
]
  // Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsListArr;