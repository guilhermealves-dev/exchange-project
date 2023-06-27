import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { InitTransactionDto, InputExecuteTransactionDto } from './order.dto';
import { Order, OrderStatus, OrderType } from '@prisma/client';

@Injectable()
export class OrdersService {
    constructor(private prismaService: PrismaService) {}

    initTransaction(input: InitTransactionDto) {
        return this.prismaService.order.create({
            data: {
                asset_id: input.asset_id,
                wallet_id: input.wallet_id,
                shares: input.shares,
                partial: input.shares,
                price: input.price,
                type: input.type,
                status: OrderStatus.PENDING,
            },
        });
    }

    executeTransaction(input: InputExecuteTransactionDto){

    }
}
