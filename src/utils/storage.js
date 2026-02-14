export const getShirts = () => {
    return JSON.parse(localStorage.getItem("shirts")) || [];
  };
  
  export const saveShirt = (shirt) => {
    const shirts = getShirts();
    shirts.push(shirt);
    localStorage.setItem("shirts", JSON.stringify(shirts));
  };  