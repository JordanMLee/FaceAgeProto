import User from "../models/User";
import HealthMetric from "../models/HealthMetric";
import Sleep from "../models/Sleep";

export const HEALTHMETRICS = [
    new HealthMetric('c1','Sleep', '#368dff'),
    // new HealthMetric('c2','Sleep', '#f5a442'),
    // new HealthMetric('c3', 'FaceAge','#f5d142'),
    new HealthMetric('c4', 'Exercise', '#368dff'),
    // new HealthMetric('c5', 'Activity', '#9eecff')
];

export const USER = new User("Jordan");


export const SLEEPDATA = [

    new Sleep(1,10.0),
    new Sleep(2,7.9),
    new Sleep(3,6.3),
    new Sleep(4,7.4),
    new Sleep(5,8.0),
    new Sleep(6,4.5),
    new Sleep(7,3.2)

];
