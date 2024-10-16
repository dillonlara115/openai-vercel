import {inject} from '@loopback/core';
import {post, requestBody, Response, RestBindings} from '@loopback/rest';

export class SendMessageController {
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) { }

  @post('/api/send-message')
  async sendMessage(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {type: 'string'},
            },
            required: ['message'],
          },
        },
      },
    })
    data: {message: string},
  ): Promise<object> {
    // Implement your message processing logic here
    console.log('Received message:', data.message);

    // Return a response
    return {
      success: true,
      message: 'Message received successfully',
    };
  }
}
