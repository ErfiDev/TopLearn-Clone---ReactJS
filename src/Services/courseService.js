import Service from './httpService';
import Config from './config.json';

const courseService = ()=>{
    return Service.get(`${Config.toplearnapi}/api/courses`);
}

export default courseService;