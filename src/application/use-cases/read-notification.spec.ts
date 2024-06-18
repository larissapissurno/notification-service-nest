import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { ReadNotification } from './read-notification';

describe('ReadNotification', () => {
  it('should be able to read a notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: 'any_id',
      content: new NotificationContent('any_content'),
      category: 'any_category',
    });

    await notificationsRepository.create(notification);

    // Act
    await readNotification.execute({
      notificationId: notification.id,
    });

    // Assert
    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non-existing notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    // Act
    const promise = readNotification.execute({
      notificationId: 'non_existing_id',
    });

    // Assert
    await expect(promise).rejects.toThrow('Notification not found');
  });
});
