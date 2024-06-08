// this is a pattern called Value Object
// this is used to isolate the business logic for specific values from the entity class
// this is a good practice to keep the entity class clean and focused on the business rules

export class NotificationContent {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string) {
    if (content.length < 3 || content.length > 255) {
      throw new Error('Content length must be between 3 and 255 characters');
    }
  }

  constructor(content: string) {
    this.validateContentLength(content);

    this.content = content;
  }
}
