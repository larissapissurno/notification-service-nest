import { NotificationContent } from './notification-content';

describe('NotificationContent', () => {
  it('should be able to create a notification content', () => {
    const notificationContent = new NotificationContent('any_content');
    expect(notificationContent).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 3 characters', () => {
    expect(() => new NotificationContent('12')).toThrow(
      'Content length must be between 3 and 255 characters',
    );
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new NotificationContent('a'.repeat(256))).toThrow(
      'Content length must be between 3 and 255 characters',
    );
  });
});
