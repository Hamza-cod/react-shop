import React, { createContext} from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  // const [category,setCategory] = useState([])

  //  useEffect(() => {
  //  const fetchCetgorys = async()=>{

  //    const  response  = await  fetch("https://fakestoreapi.com/products/categories")
  //    const data = await response.json()
  //    setCategory(data)
  //     // console.log(data)
  //  }

  //  fetchCetgorys()
  //  }, []);
  // ['electronics', 'jewelery', "men's clothing", "women's clothing"]
  // const [categ,setCateg] = useState()
  let categorys = [
    {
      name: "electronics",
      desc: "Explore the cutting-edge world of electronics in our online store. From sleek smartphones and powerful laptops to high-quality audio equipment and innovative smart devices, we offer a wide range of products to cater to your tech needs. Stay connected, entertained.",
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "jewelery",
      desc: "Elevate your style with our exquisite collection of jewelry. Discover timeless pieces and modern designs crafted with precision and attention to detail. From sparkling diamonds and precious gemstones to chic and trendy accessories, our jewelry selection offers something for every taste and occasion",
      img: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "men's clothing",
      desc: "Redefine your wardrobe with our fashionable men's clothing collection. From casual wear to formal attire, we present a diverse range of styles that blend comfort with contemporary trends. Explore a variety of well-crafted shirts, stylish jackets",
      img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "women's clothing",
      desc: "Unleash your personal style with our chic and versatile women's clothing collection. Dive into a world of fashion that caters to your every mood and occasion. From elegant dresses and stylish tops to comfortable activewear, our curated selection embraces diversity and celebrates individuality",
      img: "https://images.pexels.com/photos/4009024/pexels-photo-4009024.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  //  const

  //  setCategory(categorys)

  return (
    <CategoryContext.Provider value={categorys}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
