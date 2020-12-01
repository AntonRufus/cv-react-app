import Contact from "./Contact";
import contactsCSS from "./contacts.module.css";
import H3SlidebarCreator from "../sidebar/H3SlidebarCreator";
import React from "react";


const Contacts = ({sidebar}) => {
    let contactsTel = sidebar.contacts.tel.map(ph => <Contact key={ph.id}
                                                              contactHref={ph.phoneHref}
                                                              sign={ph.sign}
                                                              contact={ph.phone}/>);
    let contactsEmail = sidebar.contacts.email.map(em => <Contact key={em.id}
                                                                  contactHref={em.emailHref}
                                                                  sign={em.sign}
                                                                  contact={em.email}/>);
    return  <div className={contactsCSS.contacts_container}>
                <H3SlidebarCreator title={sidebar.titleContacts}/>
                {contactsTel}
                {contactsEmail}
            </div>
}

export default Contacts;
