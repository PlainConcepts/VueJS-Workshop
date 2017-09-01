import { IDateService } from '.';

export class DateService implements IDateService {
    public formatDate(date: Date): string {
        if (date == null) {
            return '';
        }

        return this.formatDigit(date.getMonth() + 1) + '/' +
                this.formatDigit(date.getDate()) + '/' +
                date.getFullYear();
    }

    private formatDigit(digit: number) {
        return digit < 10 ? '0' + digit : digit;
    }
}

export let dateService = new DateService();