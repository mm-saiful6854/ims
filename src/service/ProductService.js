import axios from "axios";

class ProductService{
    async getProductList(itemsPerPage) {
        const item = await axios.get(`https://dummyjson.com/products?limit=${itemsPerPage}`).then(res => {
            return res.data.products;
        }).catch((error) => {
            if (error.response) {
                toastr.error(error.response.data.message, "Error");
                if (error.response && error.response.data.errors) {
                    console.log(error.response.data.errors)
                }
            } else {
                toastr.error(error.message, "Error");
            }
            return [];
        });
        return item
    }

}


export default new ProductService();
