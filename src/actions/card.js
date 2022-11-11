const API_URL = process.env.REACT_APP_API_URL;

export const loadCard = async (callback) => {
  try {
    const response = await fetch(`${API_URL}/card/`);
    const data = await response.json();
    callback(data);
  } catch (e) {
    console.error(e);
  }
};

export const postCard = async (card) => {
  try {
    await fetch(`${API_URL}/card/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });
  } catch (e) {
    console.error(e);
  }
};

export const deleteCard = async (cardId) => {
  try {
    await fetch(`${API_URL}/card/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export const addCardToStack = (stack, card, callback) => {
  const newStack = stack;
  newStack.push(card);
  callback(newStack);
};

export const removeCardFromStack = (stack, card, callback) => {
  const newStack = stack;
  const cardIndex = newStack.indexOf(card);
  newStack.splice(cardIndex, 1);
  callback(newStack);
};
