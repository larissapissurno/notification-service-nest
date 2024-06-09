import { SendNotification } from './send-notification';

const notificationsRepository = {
  create: jest.fn(),
};

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    // Arrange
    const sendNotification = new SendNotification(notificationsRepository);

    // Act
    const request = {
      recipientId: 'any_id',
      content: 'any_content',
      category: 'any_category',
    };
    const response = await sendNotification.execute(request);

    // Assert
    expect(response.notification).toBeTruthy();
    expect(notificationsRepository.create).toHaveBeenCalledWith(
      response.notification,
    );
  });
});
