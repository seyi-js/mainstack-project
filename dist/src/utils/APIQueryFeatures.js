"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIQueryFeatures = void 0;
class APIQueryFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    count() {
        return this.query.count();
    }
    filter() {
        const queryObject = Object.assign({}, this.queryString);
        const excludedFields = ['sort', 'fields', 'limit', 'page'];
        excludedFields.forEach((el) => delete queryObject[el]);
        // ADVANCED FILTERING FOR [gte, gt, lte, lt]
        let queryString = JSON.stringify(queryObject);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        this.query = this.query.find(JSON.parse(queryString));
        return this;
    }
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }
        else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }
    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        else {
            this.query = this.query.select('-__v');
        }
        return this;
    }
    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}
exports.APIQueryFeatures = APIQueryFeatures;
exports.default = APIQueryFeatures;
//# sourceMappingURL=APIQueryFeatures.js.map