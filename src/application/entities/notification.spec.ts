import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('NotificationContent', () => {
  it('should be able to create a notification ', () => {
    const notification = new Notification({
      recipientId: 'any_id',
      content: new NotificationContent('any_content'),
      category: 'any_category',
    });

    expect(notification).toBeTruthy();
  });
});
