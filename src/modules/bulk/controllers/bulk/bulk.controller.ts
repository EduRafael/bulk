import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('bulk')
export class BulkController {
  @Get('health')
  Health(@Res() res: Response) {
    return res.status(HttpStatus.OK).json({ msg: 'ᕙ( ͡❛ ͜ʖ ͡❛)ᕗ' });
  }
}
