import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(input: Date): number {
        let now = new Date();
        return now.getFullYear() - input.getFullYear();
    }

}
