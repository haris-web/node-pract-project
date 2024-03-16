class apiResponse {
    constructor(statusCode, message ="Success", data) {
        this.status = statusCode;
        this.message = message;
        this.data = data;
    }
}