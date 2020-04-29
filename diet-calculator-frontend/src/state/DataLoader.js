import Meal from "../model/diet/Meal";
import Portion from "../model/diet/Portion";
import Product from "../model/diet/Product";
import {State} from "./State";

const DOMAINS = [
    Product, Portion, Meal,
];

export default class DataLoader {
    static refreshData() {
        Object.keys(State.services).forEach(serviceName => State.services[serviceName].loadData());
    }
}