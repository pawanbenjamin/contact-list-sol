const url = "https://jsonplace-univclone.herokuapp.com/users";

export async function fetchContacts() {
  try {
    const response = await fetch(url);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    return error;
  }
}

export async function fetchSingleContact(id) {
  try {
    const response = await fetch(`${url}/${id}`);
    const singleContact = await response.json();
    return singleContact;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
