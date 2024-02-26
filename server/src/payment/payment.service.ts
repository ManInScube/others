import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import { CheckPaymentDto } from './dto/check-payment.dto';

import axios from 'axios';

@Injectable()
export class PaymentService {

    async makePayment(makePaymentDto: MakePaymentDto){
        try {
            const {data} = await axios({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    'Content-Type': 'application/json',
                    'Idempotence-Key': Date.now()
                },
                auth: {
                    username: "291703",
                    password: "test_0fT1c_bQZLE20ww3yGpVSmvlXD6ehuzRZr_4MBqi7SA"
                },
                data: {
                    amount:{
                        value: makePaymentDto.amount,
                        currency: "RUB"
                    },
                    capture: true,
                    confirmation:{
                        type: "redirect",
                        return_url: "http://localhost:3001/order"
                    },
                    description: 'Заказ 1'
                },
            });

            return data;
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }

    async checkPayment(checkPaymentDto: CheckPaymentDto){
        try {
            const {data} = await axios({
                method: 'GET',
                url: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,
                auth: {
                    username: "291703",
                    password: "test_0fT1c_bQZLE20ww3yGpVSmvlXD6ehuzRZr_4MBqi7SA"
                },
            });

            return data;
        } catch (error) {
            throw new ForbiddenException(error);
        }
    }
}
