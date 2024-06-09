import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    // Arrange
    const sendNotification = new SendNotification();

    // Act
    const request = {
      recipientId: 'any_id',
      content: 'any_content',
      category: 'any_category',
    };
    const response = await sendNotification.execute(request);

    // Assert
    expect(response.notification).toBeTruthy();
  });
});
