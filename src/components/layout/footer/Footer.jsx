import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../../assets/svgs/Hekto.svg";
import EmailInput from "../../UI/EmailInput";
import Svg from "./../../UI/Svg";

const footerData = [
  {
    title: "Categories",
    listItems: [
      "Laptops & Computers",
      "Cameras & Photography",
      "Smart Phones & Tablets",
      "Video Games & Consoles",
      "Waterproof Headphones",
    ],
  },
  {
    title: "Customer Care",
    listItems: [
      "My Account",
      "Discount",
      "Returns",
      "Orders History",
      "Order Tracking",
    ],
  },
  {
    title: "Pages",
    listItems: [
      "Blog",
      "Browse the Shop",
      "Category",
      "Pre-Built Pages",
      "Visual Composer Elements",
      "WooCommerce Pages",
    ],
  },
];

function LinksContainer(props) {
  return (
    <div className={classes.links__container}>
      <h3 className="subtitle-2">{props.title}</h3>
      <ul>
        {props.listItems.map((item, idx) => (
          <li key={idx} className="body-text-regular-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__content}>
          <div className={classes.footer__email}>
            <img src={Logo} alt="Hekto Logo" />
            <EmailInput />
            <div className="">
              <p className={classes.margin_bottom_sm + " body-text-regular-sm"}>
                Contact Info
              </p>
              <p className="body-text-regular-sm">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          <div className={classes.footer__links}>
            {footerData.map((item, idx) => (
              <LinksContainer
                key={idx}
                title={item.title}
                listItems={item.listItems}
              />
            ))}
          </div>
        </div>
      </footer>
      <div className={classes.footer__copyright}>
        <div className={classes.copyright__content}>
          <p className="subtitle-4">©Webecy - All Rights Reserved</p>
          <div className={classes.socials}>
            <a className={classes.link__container}>
              <Svg id="facebook" />
            </a>
            <a className={classes.link__container}>
              <Svg id="instagram" />
            </a>
            <a className={classes.link__container}>
              <Svg id="twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
