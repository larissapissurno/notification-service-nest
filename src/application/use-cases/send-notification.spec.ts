import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
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
    expect(notificationsRepository.notifications[0]).toEqual(
      response.notification,
    );
  });
});
