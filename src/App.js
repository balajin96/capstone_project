import Directory from "./components/directory/directory.component";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://api.openverse.engineering/v1/images/b1cc6484-16c4-4481-b7cf-76589b9825d9/thumb/"
      // https://i.ibb.co/cvpntL1/hats.png
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/MA-1_Jacket_in_petrol.jpg"
      //https://i.ibb.co/px2tCc3/jackets.png
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://api.openverse.engineering/v1/images/df28d013-1ed0-46cd-a251-260d638682c0/thumb/"
      //https://i.ibb.co/0jqHpnp/sneakers.png
    },
    {
      id: 4,
      title: "pants",
      imageUrl:
        "https://api.openverse.engineering/v1/images/1fa392be-e483-465c-b0c4-b54a2f1b338e/thumb/"
      //https://i.ibb.co/GCCdy8t/womens.png
    },
    {
      id: 5,
      title: "blazer",
      imageUrl:
        "https://api.openverse.engineering/v1/images/eda72542-d0d6-4d71-a885-0a26950947cb/thumb/"
      //https://i.ibb.co/R70vBrQ/men.png
    }
  ];
  return <Directory categories={categories} />;
};

export default App;
