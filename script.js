const hambuger = document.querySelector(".hambuger");
const responsiveMenu = document.querySelector(".responsive__Menu");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  responsiveMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.
  addEventListener("click", () => {
    hambuger.classList.remove("active");
    responsiveMenu.classList.remove("active");
  }))



var myArray = [
  {
    img: "assets/image/catalog.png",
    name: "Catalog",
    site: "catalogapp.io",
    rating: {
      progress: 60,
      val: 394,
      max: 653,
      percent: {
        label: "20%",
        type: "high",
        image: "assets/image/arrow-up.png",
        classname: "table-content__btn-percentage--up",
      }
    },
    lastAssessed: "22 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Lable",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--blue"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },
      {
        label: "+4",
        bg: "#F2F4F7",
        color: "#344054",
        classname: "table-content__chip--gray"
      },
    ]


  },

  {
    img: "assets/image/capsule.png",
    name: "Capsule",
    site: "getcapsule.com",
    rating: {
      progress: 72,
      val: 454,
      max: 653,
      percent: {
        label: "20%",
        type: "low",
        image: "assets/image/arrow-down.png",
        classname: "table-content__btn-percentage--down",
      }
    },
    lastAssessed: "20 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Business data",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--blue"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },
      {
        label: "+4",
        bg: "#F2F4F7",
        color: "#344054",
        classname: "table-content__chip--gray"
      },
    ]


  },
  {
    img: "assets/image/command.png",
    name: "Command+R",
    site: "cmdr.ai",
    rating: {
      progress: 78,
      val: 500,
      max: 653,
      percent: {
        label: "20%",
        type: "high",
        image: "assets/image/arrow-up.png",
        classname: "table-content__btn-percentage--up",
      }
    },
    lastAssessed: "24 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Lable",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--blue"
      },
      {
        label: "Financials",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--pink "
      },

    ]


  },
  {
    img: "assets/image/Hourglass.png",
    name: "Hourglass",
    site: "hourglass.app",
    rating: {
      progress: 38,
      val: 254,
      max: 653,
      percent: {
        label: "20%",
        type: "high",
        image: "assets/image/arrow-up.png",
        classname: "table-content__btn-percentage--up",
      }
    },
    lastAssessed: "26 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Database access",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--gray"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },

    ]


  },
  {
    img: "assets/image/layer.png",
    name: "Layers",
    site: "getlayers.io",
    rating: {
      progress: 42,
      val: 300,
      max: 653,
      percent: {
        label: "20%",
        type: "high",
        image: "assets/image/arrow-down.png",
        classname: "table-content__btn-percentage--down",
      }
    },
    lastAssessed: "18 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Salesforce",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--orange"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },
      {
        label: "+4",
        bg: "#F2F4F7",
        color: "#344054",
        classname: "table-content__chip--gray"
      },
    ]


  },
  {
    img: "assets/image/Quotient.png",
    name: "Quotient",
    site: "quotient.co",
    rating: {
      progress: 66,
      val: 399,
      max: 653,
      percent: {
        label: "20%",
        type: "low",
        image: "assets/image/arrow-down.png",
        classname: "table-content__btn-percentage--down",
      }
    },
    lastAssessed: "28 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "Active",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--green"
      },
      {
        label: "Business data",
        bg: "#EFF8FF",
        color: "#175CD",
        classname: "table-content__chip--blue"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },
      {
        label: "+4",
        bg: "#F2F4F7",
        color: "#344054",
        classname: "table-content__chip--gray"
      },
    ]


  },
  {
    img: "assets/image/Sisyphus.png",
    name: "Sisyphus",
    site: "sisyphus.com",
    rating: {
      progress: 91,
      val: 574,
      max: 653,
      percent: {
        image: "assets/image/arrow-up.png",
        label: "20%",
        classname: "table-content__btn-percentage--up",
      }
    },
    lastAssessed: "16 Jan 2022",
    categories: [
      {
        img: "assets/image/_Dot.png",
        label: "inactive",
        bg: "#ECFDF3",
        color: "#027A4",
        classname: "table-content__chip--gray"
      },
      {
        label: "Lable",
        bg: "#EFF8F",
        color: "#175CD4",
        classname: "table-content__chip--blue"
      },
      {
        label: "Financials",
        bg: "#F2F4F7",
        color: "#344054",
        classname: "table-content__chip--pink"
      },
    ]


  },
]
buildTable(myArray)
console.log(myArray)
function buildTable(data) {
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++) {
    var row = `<tr  class="table-content__row">
      <td class="table-content__col--1">
          <div class="form__group">
              <input type="checkbox"id="catalog">
              <label for="catalog"></label>
          </div>
      </td>


      <td class="table-content__col--2">
        <div class="table-content__flex">
          <img src=${data[i].img} alt="">
          <p class="table-vendor__name">${data[i].name}<br>
          <span class="table-vendor__site">${data[i].site}</span></p>
        </div>
      </td>
      <td class="table-content__col--3">
        <div class="table-content__flex">
            <div class="progress-bar"><progress class="progress progress1" max=${data[i].rating.max}
                    value=${data[i].rating.val}></progress> <span>${data[i].rating.progress}</span></div>
            <div>
                <button class=${data[i].rating.percent.classname}>
                <img src=${data[i].rating.percent.image} alt="">
                    <span class="table-content__btn--text">${data[i].rating.percent.label}</span></button>
            </div>
        </div>
      </td>
      <td class="table-content__date">${data[i].lastAssessed}</td>
      <td class="table-content__col--5">
        <div class="category"></div>
      </td>
      <td class="table-content__col--6">
      <button class="table-content__delet--btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
         <path
          d="M13.3333 4.99999V4.33332C13.3333 3.3999 13.3333 2.93319 13.1517 2.57667C12.9919 2.26307 12.7369 2.0081 12.4233 1.84831C12.0668 1.66666 11.6001 1.66666 10.6667 1.66666H9.33333C8.39991 1.66666 7.9332 1.66666 7.57668 1.84831C7.26308 2.0081 7.00811 2.26307 6.84832 2.57667C6.66667 2.93319 6.66667 3.3999 6.66667 4.33332V4.99999M8.33333 9.58332V13.75M11.6667 9.58332V13.75M2.5 4.99999H17.5M15.8333 4.99999V14.3333C15.8333 15.7335 15.8333 16.4335 15.5608 16.9683C15.3212 17.4387 14.9387 17.8212 14.4683 18.0608C13.9335 18.3333 13.2335 18.3333 11.8333 18.3333H8.16667C6.76654 18.3333 6.06647 18.3333 5.53169 18.0608C5.06129 17.8212 4.67883 17.4387 4.43915 16.9683C4.16667 16.4335 4.16667 15.7335 4.16667 14.3333V4.99999"
          stroke="#475467" stroke-width="1.66667" stroke-linecap="round"
          stroke-linejoin="round" />
        </svg>
      </button>
      <button class="table-content__edit--btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
             <path
             d="M2.39668 15.0964C2.43497 14.7518 2.45411 14.5795 2.50624 14.4185C2.55249 14.2756 2.61784 14.1396 2.70051 14.0142C2.79369 13.8729 2.91627 13.7504 3.16142 13.5052L14.1667 2.49999C15.0871 1.57951 16.5795 1.57951 17.5 2.49999C18.4205 3.42046 18.4205 4.91285 17.5 5.83332L6.49475 16.8386C6.2496 17.0837 6.12702 17.2063 5.98572 17.2995C5.86035 17.3821 5.72439 17.4475 5.58152 17.4937C5.42048 17.5459 5.24819 17.565 4.90362 17.6033L2.08331 17.9167L2.39668 15.0964Z"
              stroke="#475467" stroke-width="1.66667" stroke-linecap="round"
              stroke-linejoin="round" />
        </svg>                                           
      </button>
      </td>
    </tr>`
    table.innerHTML += row;
    var div = document.getElementsByClassName('category')[i];
    for (var j = 0; j < data[i].categories.length; j++) {
      var catOutput = `
      <span class=${data[i].categories[j].classname}>
        ${data[i].categories[j].label}
      </span> 
      `;
      div.innerHTML += catOutput;
    }
  }
}







function toggleDiv(checked) {
  const divCheck = document.getElementById("divcheck");
  const support = document.getElementById("support");
  if (checked) {
      divCheck.style.display = "block";
      setTimeout(() => {
          divCheck.classList.add("show-div");
      }, 10); // Delay to allow display to take effect
  } else {
      divCheck.classList.remove("show-div");
      setTimeout(() => {
          divCheck.style.display = "none";
      }, 300); // Match the transition duration
  }
}







hidden-div {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: none;
}

show-div {
  transform: translateY(0);
  opacity: 1;
  display: block;
}