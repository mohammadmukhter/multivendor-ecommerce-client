import axios from "axios";

const addCartUtil = async(productId, userEmail= "") => {
    const addCartData = await axios.post("http://localhost:3000/carts", {productId, userEmail});
    console.log(addCartData);

    return {productId, userEmail}

};

export default addCartUtil;