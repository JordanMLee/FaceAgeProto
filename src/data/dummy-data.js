import User from "../models/User";
import HealthMetric from "../models/HealthMetric";

export const HEALTHMETRICS = [
    new HealthMetric('c1','Sleep', '#f5428d'),
    // new HealthMetric('c2','Sleep', '#f5a442'),
    // new HealthMetric('c3', 'FaceAge','#f5d142'),
    new HealthMetric('c4', 'Exercise', '#368dff'),
    new HealthMetric('c5', 'Activity', '#9eecff')
];

export const USER = new User("Jordan");


