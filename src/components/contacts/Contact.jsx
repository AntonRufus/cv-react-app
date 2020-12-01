import React from "react";
import contactsCSS from "./contacts.module.css";

const Contact = ({contactHref, contact, sign}) => {
    return  <div>
                <div className={contactsCSS.contacts_item}>{sign}<a href={contactHref}>{contact}</a></div>
            </div>
}

export default Contact;
