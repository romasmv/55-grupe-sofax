import { aboutHeaderData} from "../../data/abaut-us-header-data.js";

export function aboutUsHeader() {

  let navbarHTML = ``;

  for (const item of aboutHeaderData) {
    if (item.subMenu) {

      let subMenuHTML = '';

      for (const subItem of item.subMenu) {
        if (subItem.subMenu) {

          let subSubMenuHTML = ``;

          for (const subSubItem of subItem.subMenu) {
            if (subSubItem) {
              subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
            }
          }

          subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="subMenu-angle fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

        } else {
          subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
        }
      };

      navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="subMenu-angle fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
            </div>`;
    } else {
      navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
    }
  }


  const HTML = `
    <div class="container-header">
        <div class="row">
            <header>
                <div class="col-10 m-1 headeris">
                    <div>
                        <a href = "#"><img class="logo" src="../img/logo-white.svg" alt="logo-white" ></a>
                    </div>
                    <nav class="navbar">
                        <div class="main-navbar">
                       ${navbarHTML}
                        </div>
                    </nav>
                    <button class="pink baltas none480px"> Get started</button>
                </div>
            </header>
        </div>
    </div>
        <div class=" container container-header containerBack ">
          <div class="col-12 forh1">
            <h1>About Us</h1>
            <div class="forHome">
            <a href="../">Home</a>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <a href="#" >About Us</a>
            </div>
          </div>
        </div>`;

  document
    .getElementById('app')
    .insertAdjacentHTML('beforeend', HTML);

}