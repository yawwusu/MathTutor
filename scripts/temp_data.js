import data from "./data.json";

const questions = Object.keys(data).map((docKey) => data[docKey]);

export default questions;
