import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { CancelNotification } from './cancel-notification';

describe('CancelNotification', () => {
  it('should be able to cancel a notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: 'any_id',
      content: new NotificationContent('any_content'),
      category: 'any_category',
    });

    await notificationsRepository.create(notification);

    // Act
    await cancelNotification.execute({
      notificationId: notification.id,
    });

    // Assert
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non-existing notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    // Act
    const promise = cancelNotification.execute({
      notificationId: 'non_existing_id',
    });

    // Assert
    await expect(promise).rejects.toThrow('Notification not found');
  });
});
