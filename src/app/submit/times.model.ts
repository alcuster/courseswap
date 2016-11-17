import { SelectItem } from 'primeng/primeng';
export class Times {

    times: SelectItem[];

    selectedTime: string;

    constructor() {
        this.times = [];
        this.times.push({label: '8:15-9:40', value: '8:15-9:40'});
        this.times.push({label: '8:30-9:20', value: '8:30-9:20'});
        this.times.push({label: '9:30-10:20', value: '9:30-10:20'});
        this.times.push({label: '9:40-10:55', value: '9:40-10:55'});
        this.times.push({label: '10:30-11:20', value: '10:30-11:20'});
        this.times.push({label: '11:30-12:20', value: '11:30-12:20'});
        this.times.push({label: '12:15-1:30', value: '12:15-1:30'});
        this.times.push({label: '12:30-1:20', value: '12:30-12:20'});
        this.times.push({label: '1:40-2:55', value: '1:40-2:55'});
    }

}
