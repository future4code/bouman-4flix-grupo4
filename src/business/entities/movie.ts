export class Movie {
  constructor(
    private id: string,
    private title: string,
    private date: Date,
    private length: number,
    private synopsis: string,
    private link: string,
    private picture: string
  ) { }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDate(): Date {
    return this.date;
  }

  public setDate(date: Date): void {
    this.date = date;
  }

  public getLength(): number {
    return this.length;
  }

  public setLength(length: number): void {
    this.length = length;
  }

  public getSynopsis(): string {
    return this.synopsis;
  }

  public setSynopsis(synopsis: string): void {
    this.synopsis = synopsis;
  }

  public getLink(): string {
    return this.link;
  }

  public setLink(link: string): void {
    this.link = link;
  }

  public getPicture(): string {
    return this.picture;
  }

  public setPicture(picture: string): void {
    this.picture = picture;
  }
}