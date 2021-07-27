import React from "react";
import Card from "./Card";
import contacts from "../models/contacts-list";
import {Contact} from "../models/contact";

function createCard(contact:Contact) {
    return <Card
        key={contact.id}
        id={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        email={contact.email}
        phone={contact.phone}
    />
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
