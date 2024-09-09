const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 8000,
      colors: [
        {
          code: "black",
          img: "/E-commerce website/image/air.png",
        },
        {
          code: "darkblue",
          img: "/E-commerce website/image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 9000,
      colors: [
        {
          code: "lightgray",
          img: "/E-commerce website/image/jordan.png",
        },
        {
          code: "green",
          img: "/E-commerce website/image/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 10000,
      colors: [
        {
          code: "lightgray",
          img: "/E-commerce website/image/blazer.png",
        },
        {
          code: "green",
          img: "/E-commerce website/image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 5000,
      colors: [
        {
          code: "black",
          img: "/E-commerce website/image/crater.png",
        },
        {
          code: "lightgray",
          img: "/E-commerce website/image/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 12000,
      colors: [
        {
          code: "gray",
          img: "/E-commerce website/image/hippie.png",
        },
        {
          code: "black",
          img: "/E-commerce website/image/hippie2.png",
        },
      ],
    },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        // Change the chosen product
        choosenProduct = products[index];
        
        // Change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "₹" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update colors
        currentProductColors.forEach((color, colorIndex) => {
            if (colorIndex < choosenProduct.colors.length) {
                color.style.backgroundColor = choosenProduct.colors[colorIndex].code;
                color.style.display = 'block'; 
            } else {
                color.style.display = 'none';
            }
        });
    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});