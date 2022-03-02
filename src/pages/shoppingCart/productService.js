import apiHelper from "../../utils/apiHelper";

export class productService {

    static getAllProducts() {

        return apiHelper.get("http://localhost:8000").then(response => response);
    }

}