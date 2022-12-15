import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationData {
  recipientId: string;
  content: Content;
  category: string;
  createdAt: Date;
  readAt?: Date | null;
}

export class Notification {
  private data: NotificationData;

  constructor(data: Replace<NotificationData, { createdAt?: Date }>) {
    this.data = {
      ...data,
      createdAt: data.createdAt ?? new Date(),
    };
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get content(): Content {
    return this.data.content;
  }

  public set content(content: Content) {
    this.data.content = content;
  }

  public get category(): string {
    return this.data.category;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get readAt(): NotificationData['readAt'] {
    return this.data.readAt;
  }

  public set readAt(readAt: NotificationData['readAt']) {
    this.data.readAt = readAt;
  }

  public get createdAt(): Date | undefined {
    return this.data.createdAt;
  }
}
